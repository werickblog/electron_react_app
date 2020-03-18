import React from "react";
import PropTypes from "prop-types";
import { Toggle } from "react-powerplug";
import NumberInput from "../commons/NumberInput";
import LabelOption from "../commons/Label";

const FontProperties = ({ fontSize, changeFontSize }) => {
  return (
    <Toggle initial={true}>
      {({ on, toggle }) => (
        <>
          <div className="toggle" onClick={toggle} checked={on}>
            <div>{on ? "➕" : "➖"} Text Size</div>
          </div>
          {on && (
            <div className="toggle__options">
              <LabelOption name="Text Size">
                <NumberInput
                  handleChange={changeFontSize}
                  name="fontSize"
                  defaultValue={fontSize}
                  value={fontSize}
                /> <span className="input__right-text">
                    PX
                </span>
              </LabelOption>
            </div>
          )}
        </>
      )}
    </Toggle>
  );
};

FontProperties.propTypes = {
  fontSize: PropTypes.number,
  changeFontSize: PropTypes.func
};

export default FontProperties;
