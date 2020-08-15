import React from "react";
import "./skills.styles.scss";
import SkillsBackground from "../../assets/skills-wave.png";

const Skills = () => {
  return (
    <div className="skills-container">
      <img
        className="skills-bg-image"
        src={SkillsBackground}
        alt="background"
      />
    </div>
  );
};

export default Skills;
