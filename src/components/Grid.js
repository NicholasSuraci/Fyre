import React from "react";

import { Link } from "react-router-dom";

export const Grid = props => {
  return (
    <div>
      <div className="about__row--item">
        <div className="about__image--container">
          <img className="about__image" src={props.image} alt="" />
        </div>
        <div className="about__image--text">
          <div className="about__image--text-wrap">
            <h1 className="about__image--header">
  <Link to={props.to}>{props.text}</Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
