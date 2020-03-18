import React from "react";
import PropTypes from "prop-types";
import { Toggle } from "react-powerplug";
import LabelOption from "../commons/Label";
import ColorPicker from "./CLPicker";

const ColorPickerProperties = ({
  changeBgColor,
  changeFontColor,
  bgColor,
  fontColor
}) => {
  return (
    <Toggle initial={true}>
      {({ on, toggle }) => (
        <>
          <div className="toggle" onClick={toggle} checked={on}>
            <div>{on ? "➕" : "➖"} Colors</div>
          </div>
          {on && (
            <div className="toggle__options">
              <LabelOption name="Background">
                <ColorPicker
                  changeSettings={changeBgColor}
                  name="bgColor"
                  defaultValue={bgColor}
                />
              </LabelOption>
              <LabelOption name="Font Color">
                <ColorPicker
                  changeSettings={changeFontColor}
                  name="color"
                  defaultValue={fontColor}
                />
              </LabelOption>
            </div>
          )}
        </>
      )}
    </Toggle>
  );
};

ColorPickerProperties.propTypes = {
  bgColor: PropTypes.string,
  fontColor: PropTypes.string,
  changeBgColor: PropTypes.func,
  changeFontColor: PropTypes.func
};

export default ColorPickerProperties;
