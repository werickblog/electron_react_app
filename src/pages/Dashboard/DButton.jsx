import React from "react";
import { Link } from "react-router-dom";

const DButton = props => {
  return (
    <div className="column is-full-mobile is-one-quarter-tablet is-4-desktop is-4-widescreen is-4-fullhd">
      <div className="dashboard__button">
        <h1 className="dashboard__button-label">{props.label}</h1>
        <p className="dashboard__button-description">{props.description}</p>
        <Link to={`${props.href}`} className="action__btn">
          {props.btn_label}
        </Link>
      </div>
    </div>
  );
};

export default DButton;
