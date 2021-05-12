import React from "react";

const Filter = ({ handleChange }) => {
  return (
    <div>
      <input onChange={handleChange} />
    </div>
  );
};

export default Filter;
