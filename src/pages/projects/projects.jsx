import React from "react";
import "./projects.styles.scss";

import ProjectsBackground from "../../assets/projects-wave.png";

const Projects = () => {
  return (
    <div className="projects-container">
      <img
        className="projects-bg-image"
        src={ProjectsBackground}
        alt="background"
      />
    </div>
  );
};

export default Projects;
