import React, { useState } from "react";

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

  const handleFilter = (event) => {
    const {
      target: { value },
    } = event;
    setFilterName(value);
  };

  const addNewPerson = (event) => {
    event.preventDefault();
    const newPersonObj = {
      name: newName,
      number: newNumber,
    };
    persons.map((person) => {
      person.name.toLowerCase().includes(newName.toLowerCase())
        ? alert(`${newName} is already added to phonebook`)
        : setPersons(persons.concat(newPersonObj));
    });

    setNewName("");
    setNewNumber("");
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

  const everyPeople = persons.map((person) => {
    return (
      <div key={person.name}>
        {person.name} {person.number}
      </div>
    );
  });

  const filtered = persons.filter((person) => {
    return person.name.toLowerCase().includes(filterName.toLowerCase());
  });

  const filteredPerson = filtered.map((person) => {
    return (
      <div key={person.name}>
        {person.name} {person.number}
      </div>
    );
  });

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input onChange={handleFilter} />
      </div>
      <h2>add a new</h2>
      <form onSubmit={addNewPerson}>
        <div>
          name: <input onChange={handleName} />
        </div>
        <div>
          number: <input onChange={handleNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filterName ? filteredPerson : everyPeople}
    </div>
  );
};

export default App;
