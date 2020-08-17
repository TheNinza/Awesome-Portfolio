import React from "react";
import "./coding-card.styles.scss";
import CardSection from "../card-section/card-section.component";

import cpplogo from "../../assets/cpplogo.png";
import clogo from "../../assets/clogo.png";
import pythonlogo from "../../assets/pythonlogo.png";
import codecheflogo from "../../assets/codecheflogo.png";
import codeforceslogo from "../../assets/codeforceslogo.png";
import Javascript from "../../assets/javascriptlogo.png";

const CodingCard = () => {
  const codingIcons = [
    {
      icon: cpplogo,
      title: "C++",
      expertise: "Advanced",
      stars: 4,
    },
    {
      icon: clogo,
      title: "C",
      expertise: "Advanced",
      stars: 4,
    },
    {
      icon: Javascript,
      title: "Javascript",
      expertise: "Intermediate",
      stars: 3,
    },
    {
      icon: pythonlogo,
      title: "Python",
      expertise: "Intermediate",
      stars: 2,
    },
  ];
  return (
    <div className="card">
      <div>
        <CardSection title="Languages" iconProps={codingIcons} />
      </div>
      <div className="achievement-section">
        <div className="end-line" />
        <h2 className="heading">Achievement</h2>
        <div className="achievement-dashboard">
          <div className="codechef-container">
            <img className="codechef-logo" src={codecheflogo} alt="logo" />
            <div className="rating">2★</div>
          </div>
          <div className="codechef-container">
            <img className="codeforces-logo" src={codeforceslogo} alt="logo" />
            <div className="codeforces-rating">Specialist</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodingCard;
