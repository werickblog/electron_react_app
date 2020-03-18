import React from "react";
import SideNav from "../../components/commons/SideNav";
import CanvasProperties from "../../components/Canvas/CanvasProperties";
import ColorPickerProperties from "../../components/Canvas/ColorPickerProperties";
import DesignComponent from "../../components/Canvas/Design";
import FontProperties from "../../components/Canvas/FontProperties";

class ImageEditor extends React.Component {
  state = {
    settings: {
      background: "white",
      bgUrl: null,
      color: "white",
      width: 800,
      height: 700,
      overlay: null,
      exportExt: "png",
      fontSize: 20
    }
  };

  changeFontSize = e => {
    this.setState({
      settings: {
        ...this.state.settings,
        fontSize: e.target.value
      }
    });
  };

  updateSettings = () => {};

  changeWidth = e => {
    this.setState({
      settings: {
        ...this.state.settings,
        width: e.target.value
      }
    });
  };

  changeHeight = e => {
    console.log(e.target.value);
    this.setState({
      settings: {
        ...this.state.settings,
        height: e.target.value
      }
    });
  };

  changeBgColor = (key, value) => {
    this.setState({
      settings: {
        ...this.state.settings,
        background: value
      }
    });
  };

  changeFontColor = (key, value) => {
    this.setState({
      settings: {
        ...this.state.settings,
        color: value
      }
    });
  };

  render() {
    const {
      settings: { height, width, background, color, fontSize }
    } = this.state;
    return (
      <div>
        <SideNav>
          <div className="sidenav__items">
            <CanvasProperties
              height={height}
              width={width}
              changeHeight={this.changeHeight}
              changeWidth={this.changeWidth}
            />
            <ColorPickerProperties
              changeBgColor={this.changeBgColor}
              changeFontColor={this.changeFontColor}
              bgColor={background}
              fontColor={color}
            />
            <FontProperties
              changeFontSize={this.changeFontSize}
              fontSize={fontSize}
            />
          </div>
        </SideNav>
        <div className="side__content">
          <div className="image__editor-holder">
            <DesignComponent
              settings={this.state.settings}
              currentMode={{ value: null }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ImageEditor;
