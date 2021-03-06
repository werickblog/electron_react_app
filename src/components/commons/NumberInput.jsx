import React from "react";

const NumberInput = ({ name, defaultValue, handleChange, value = null }) => {
  if (value === null)
    return (
      <input
        type="number"
        className="small__input"
        onChange={handleChange}
        name={name}
        defaultValue={defaultValue}
      />
    );

  return (
    <input
      className="small__input"
      type="number"
      onChange={handleChange}
      name={name}
      value={value}
    />
  );
};

export default NumberInput;
