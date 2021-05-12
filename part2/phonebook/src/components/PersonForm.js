import React from "react";

const PersonForm = ({
  submit,
  handleName,
  handleNumber,
  nameValue,
  numberValue,
}) => {
  return (
    <form onSubmit={submit}>
      <div>
        name: <input onChange={handleName} value={nameValue} />
      </div>
      <div>
        number: <input onChange={handleNumber} value={numberValue} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
