import React from "react";
import PropTypes from "prop-types";
import { Toggle } from "react-powerplug";
import NumberInput from "../commons/NumberInput";
import LabelOption from "../commons/Label";

const CanvasProperties = ({ height, width, changeWidth, changeHeight }) => {
  return (
    <Toggle initial={true}>
      {({ on, toggle }) => (
        <>
          <div className="toggle" onClick={toggle} checked={on}>
            <div>{on ? "➕" : "➖"} Dimensions</div>
          </div>
          {on && (
            <div className="toggle__options">
              <LabelOption name="Width">
                <NumberInput
                  handleChange={changeWidth}
                  name="width"
                  defaultValue={width}
                  value={width}
                />
              </LabelOption>
              <LabelOption name="Height">
                <NumberInput
                  handleChange={changeHeight}
                  name="height"
                  defaultValue={height}
                  value={height}
                />
              </LabelOption>
            </div>
          )}
        </>
      )}
    </Toggle>
  );
};

CanvasProperties.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  changeHeight: PropTypes.func,
  changeWidth: PropTypes.func
};

export default CanvasProperties;
