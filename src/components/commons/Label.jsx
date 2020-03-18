import React from "react";

const LabelOption = ({ name, children }) => {
  return (
    <div className="label__option-holder">
      <div className="label__option-header">{name}</div>
      <div className="label__options">{children}</div>
    </div>
  );
};

export default LabelOption;
