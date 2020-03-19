import React from "react";
import PropTypes from "prop-types";
import { Toggle } from "react-powerplug";
import LabelOption from "../commons/Label";
import TextInput from "../commons/TextInput";

const ImageSelection = ({ handleImageUpdate, image }) => {
  return (
    <Toggle initial={false}>
      {({ on, toggle }) => (
        <>
          <div className="toggle" onClick={toggle} checked={on}>
            <div>{on ? "➕" : "➖"} Image</div>
          </div>
          {on && (
            <div className="toggle__options">
              <LabelOption name="Background Image">
                <TextInput
                  handleChange={handleImageUpdate}
                  name="bgUrl"
                  defaultValue={image}
                  value={image}
                />
              </LabelOption>
            </div>
          )}
        </>
      )}
    </Toggle>
  );
};

ImageSelection.propTypes = {
  image: PropTypes.string,
  handleImageUpdate: PropTypes.func
};

export default ImageSelection;
