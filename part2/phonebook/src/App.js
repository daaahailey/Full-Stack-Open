import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayPeople from "./components/DisplayPeople";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");
  // const baseUrl = "http://localhost:3001/persons";

  useEffect(() => {
    // console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      // console.log("promise fulfilled");
      // console.log(response.data);
      setPersons(response.data);
    });
  }, []);
  // console.log("render", persons.length, "persons");

  const addNewPerson = (event) => {
    event.preventDefault();

    const newPersonObj = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    const isExist = persons.some(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );
    // console.log(isExist);

    isExist === true
      ? alert(`${newName} is already added to phonebook`)
      : axios
          .post("http://localhost:3001/persons", newPersonObj)
          .then((response) => {
            // console.log(response.dat);
            setPersons(persons.concat(response.data));
          });

    setNewName("");
    setNewNumber("");
  };

  const handleFilter = (event) => {
    const {
      target: { value },
    } = event;
    setFilterName(value);
  };

  const handleName = (event) => {
    const {
      target: { value },
    } = event;
    setNewName(value);
  };

  const handleNumber = (event) => {
    const {
      target: { value },
    } = event;
    setNewNumber(value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleChange={handleFilter} />
      <h2>add a new</h2>
      <PersonForm
        submit={addNewPerson}
        handleName={handleName}
        handleNumber={handleNumber}
        nameValue={newName}
        numberValue={newNumber}
      />
      <h2>Numbers</h2>
      <DisplayPeople persons={persons} filterName={filterName} />
    </div>
  );
};

export default App;
