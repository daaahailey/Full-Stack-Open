import React, { useState, useEffect } from "react";
import axios from "axios";

const FilteredCountry = ({ filtered }) => {
  const [weather, setWeather] = useState([]);
  const api_key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    // const capital = filtered.map((country) => country.capital);
    const capital = filtered[0].name;
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`
      )
      .then((response) => {
        setWeather(response.data.current);
      });
  }, []);
  // console.log(weather);

  return filtered.map((country) => (
    <div key={country.name}>
      <h2>{country.name}</h2>
      <p>
        <strong>capital</strong> {country.capital}
        <br />
        <strong>population</strong> {country.population}
      </p>
      <h3>Spoken languages</h3>
      <ul>
        {country.languages.map((lan) => (
          <li key={lan.name}>{lan.name}</li>
        ))}
      </ul>
      <img src={country.flag} style={{ width: "140px" }} />
      <h3>Weather in {country.capital}</h3>
      <p>
        <strong>temperature:</strong> {weather.temperature} Celcius
      </p>
      <img src={weather.weather_icons} />
      <p>
        <strong>wind:</strong> {weather.wind_speed} mph direction{" "}
        {weather.wind_dir}
      </p>
    </div>
  ));
};

export default FilteredCountry;
