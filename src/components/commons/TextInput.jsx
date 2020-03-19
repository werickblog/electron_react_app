import React from "react";

const TextInput = ({ name, defaultValue, handleChange, value = null }) => {
  if (value === null)
    return (
      <input
        type="text"
        className="text__input"
        onChange={handleChange}
        name={name}
        defaultValue={defaultValue}
      />
    );

  return (
    <input
      className="text__input"
      type="text"
      onChange={handleChange}
      name={name}
      value={value}
    />
  );
};

export default TextInput;
