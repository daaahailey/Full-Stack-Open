import React, { useState } from "react";
import DisplayPeople from "./components/DisplayPeople";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");

  const addNewPerson = (event) => {
    event.preventDefault();

    const newPersonObj = {
      name: newName,
      number: newNumber,
    };

    const isExist = persons.some(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );
    // console.log(isExist);

    isExist === true
      ? alert(`${newName} is already added to phonebook`)
      : setPersons(persons.concat(newPersonObj));

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
