import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { TwitterPicker } from "react-color";
import useOuterClickNotifier from "./Hooks";

const ColorPicker = ({ changeSettings, name, defaultValue }) => {
  const [toggle, setToggle] = useState(false);
  const [current, setCurrent] = useState(false);

  const innerRef = useRef(null);

  const showColorPicker = () => setToggle(!toggle);

  const updateSettings = ({ hex }) => {
    changeSettings(name, hex);
    setCurrent(hex);
  };

  useOuterClickNotifier(e => {
    if (toggle) setToggle(!toggle);
  }, innerRef);

  return (
    <>
      <div className="color-picker">
        <div onClick={showColorPicker} className="swatch">
          <div
            className="color"
            style={{ background: current || defaultValue }}
          />
          {toggle && "❌"}
        </div>
        <div className="picker" ref={innerRef}>
          {toggle && (
            <TwitterPicker
              color={defaultValue}
              onChange={updateSettings}
              triangle="hide"
            />
          )}

          <TwitterPicker
            color={defaultValue}
            onChange={updateSettings}
            triangle="hide"
          />
        </div>
      </div>
    </>
  );
};

ColorPicker.propTypes = {
  changeSettings: PropTypes.func,
  name: PropTypes.string,
  defaultValue: PropTypes.string
};

export default ColorPicker;
