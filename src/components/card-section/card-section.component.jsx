import React from "react";
import "./card-section.styles.scss";
import Icon from "../icon/icon";

const CardSection = ({ title, iconProps }) => {
  return (
    <div className="section-container">
      <h2 className="section-title">{title}</h2>
      <div className="icons-container">
        {iconProps
          ? iconProps.map((iconProp, i) => {
              return <Icon iconProps={iconProp} key={i} />;
            })
          : ""}
      </div>
    </div>
  );
};

export default CardSection;
