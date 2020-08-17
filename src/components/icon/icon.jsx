import React from "react";
import "./icon.scss";

const Icon = ({ iconProps }) => {
  const { icon, title, expertise, stars } = iconProps;
  return (
    <div className="icon">
      <img className="icon-image" src={icon} alt="i" />
      <div className="icon-descreption">
        <div className="title">{title}</div>
        <div className="expertise">Expertise: {expertise}</div>
        <div className="stars">
          {"★".repeat(stars)}
          <span className="faded-stars">{"★".repeat(5 - stars)}</span>
        </div>
      </div>
    </div>
  );
};

export default Icon;
