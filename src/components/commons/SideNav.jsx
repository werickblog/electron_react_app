import React from "react";
import Logo from "./Logo";

const SideNav = props => (
  <div className="sidenav">
    <div className="sidenav__logo">
      <Logo />
    </div>
    <div className="sidenav__options">{props.children}</div>
  </div>
);

export default SideNav;
