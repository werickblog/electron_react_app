import React from "react";
import WikWhiteLogo from "../../assets/imgs/wikwhitelogo.svg";
import WikBlackLogo from "../../assets/imgs/wikblacklogo.svg";

class Logo extends React.Component {
  state = {
    theme: "dark"
  };

  componentDidMount() {
    const theme = localStorage.getItem("theme");

    if (!theme || theme === "dark") {
      this.setState({
        theme: "dark"
      });
    } else {
      this.setState({
        theme: "light"
      });
    }
  }

  render() {
    const { theme } = this.state;
    return (
      <img
        className="logo"
        src={theme === "dark" ? WikWhiteLogo : WikBlackLogo}
        alt="logo"
      />
    );
  }
}

export default Logo;
