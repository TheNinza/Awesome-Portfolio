import React from "react";
import "./skills.styles.scss";
import SkillsBackground from "../../assets/skills-wave.png";
import DevelopmentCard from "../../components/development-card/development-card.component";

const Skills = () => {
  return (
    <div className="skills-container">
      <img
        className="skills-bg-image"
        src={SkillsBackground}
        alt="background"
      />
      <div className="skills-content">
        <div className="cubes-container">
          <div className="cube">
            <h1 className="cube-title development-title">DEVELOPMENT</h1>
            <DevelopmentCard />
          </div>
          <div className="cube">
            <h1 className="cube-title coding-title">CODING</h1>
            <DevelopmentCard />
          </div>
          <div className="cube">
            <h1 className="cube-title content-title">CONTENT-CREATION</h1>
            <DevelopmentCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
