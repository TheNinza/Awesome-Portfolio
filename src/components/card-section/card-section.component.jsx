import React from "react";
import "./card-section.styles.scss";

const CardSection = ({ title, icons }) => {
  return (
    <div className="section-container">
      <h2 className="section-title">{title}</h2>
      <div className="icons-container">
        {icons
          ? icons.map((icon, i) => {
              return (
                <div className="icon" key={i}>
                  <img className="icon-image" src={icon} alt="i" />
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default CardSection;
