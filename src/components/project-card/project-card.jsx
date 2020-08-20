import React from "react";
import "./project-card.scss";
const ProjectCard = ({ project }) => {
  const { image, title, descreption, liveLink, sourceLink } = project;
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img className="project-image" src={image} alt="crwnClothing" />
      </div>
      <div className="project-title"> {title} </div>
      <div className="project-descreption-container">
        <div className="project-descreption">{descreption}</div>
        <div className="buttons-container">
          <div
            className="source-button project-button"
            onClick={() => window.open(sourceLink)}
          >
            Source
          </div>
          <div
            className="live-button project-button"
            onClick={() => window.open(liveLink)}
          >
            Live
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
