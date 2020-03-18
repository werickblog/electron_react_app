import React from "react";
import PropTypes from "prop-types";
import { TwitterPicker } from "react-color";

class ColorPickerComponent extends React.Component {
  state = {
    toggle: false,
    current: ""
  };

  innerRef = React.createRef(null);

  showOrHidePicker = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };

  updateSettings = ({ hex }) => {
    const { changeSettings, name } = this.props;

    changeSettings(name, hex);
    this.setState({
      toggle: false,
      current: hex
    });
  };

  render() {
    const { defaultValue } = this.props;
    const { toggle, current } = this.state;

    return (
      <div className="color-picker">
        <div onClick={this.showOrHidePicker} className="swatch">
          <div
            style={{ background: current || defaultValue }}
            className="color"
          ></div>
          <span className="close">{toggle && "❌ Close"}</span>
        </div>
        <div className="picker">
          {toggle ? (
            <TwitterPicker
              color={defaultValue}
              onChangeComplete={this.updateSettings}
              triangle="hide"
            />
          ) : null}
        </div>
      </div>
    );
  }
}

ColorPickerComponent.propTypes = {
  changeSettings: PropTypes.func,
  name: PropTypes.string,
  defaultValue: PropTypes.string
};

export default ColorPickerComponent;
