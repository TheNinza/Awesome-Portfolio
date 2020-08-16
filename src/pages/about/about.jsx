import React from "react";
import "./about.styles.scss";

import AboutBackground from "../../assets/about-wave.png";
import PersonImage from "../../assets/myImage.png";

const About = () => {
  return (
    <div className="about-container">
      <img className="about-bg-image" src={AboutBackground} alt="background" />
      <div className="about-content">
        <div className="text-field">
          <div className="text">
            <h1 className="heading">Hello There,</h1>
            <p className="description">
              My Name is <span className="name">Nikhil</span>. Currently I am
              persuing my BTech in Computer Science and Engineering at
              IIIT-Gwalior. Continue surfing this website to know more.
            </p>
          </div>
        </div>
        <div className="photo-container">
          <img className="photo" src={PersonImage} alt="Me" />
        </div>
      </div>
    </div>
  );
};

export default About;
