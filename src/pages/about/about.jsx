import React from "react";
import "./about.styles.scss";

import AboutBackground from "../../assets/about-wave.png";

const About = () => {
  return (
    <div className="about-container">
      <img className="about-bg-image" src={AboutBackground} alt="background" />
    </div>
  );
};

export default About;
