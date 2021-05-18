import React, { useState, useEffect } from "react";
import axios from "axios";
import FilteredCountry from "./components/FilteredCountry";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleSearch = (event) => {
    const {
      target: { value },
    } = event;
    setSearchValue(value);
  };

  const filtered = countries.filter((country) => {
    return country.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  const displayCountries = () => {
    return filtered.map((country) => {
      if (filtered.length > 1) {
        return (
          <div key={country.name}>
            {country.name}
            <button onClick={() => setSearchValue(country.name)}>show</button>
          </div>
        );
      } else if (filtered.length === 1) {
        return <FilteredCountry key={country.name} filtered={filtered} />;
      }
    });
  };

  return (
    <div>
      <p>
        find countries
        <input onChange={handleSearch} value={searchValue} />
      </p>
      <div>
        {searchValue ? (
          filtered.length > 10 ? (
            <p>Too many matches, specify another filter</p>
          ) : (
            displayCountries()
          )
        ) : (
          <p>Please enter country name</p>
        )}
      </div>
    </div>
  );
}

export default App;
