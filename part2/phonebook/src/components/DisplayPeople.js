import React from "react";

const DisplayPeople = ({ persons, filterName }) => {
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

  return filterName ? filteredPerson : everyPeople;
};

export default DisplayPeople;
