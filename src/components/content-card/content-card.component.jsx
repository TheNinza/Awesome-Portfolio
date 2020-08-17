import React from "react";
import "./content-card.styles.scss";
import CardSection from "../card-section/card-section.component";

import figmalogo from "../../assets/figmalogo.png";
import photoshoplogo from "../../assets/photoshoplogo.png";
import premierlogo from "../../assets/premierlogo.png";
import youtubelogo from "../../assets/youtubelogo.png";

const ContentCard = () => {
  const contentLogo = {
    softwareIcons: [
      {
        icon: figmalogo,
        title: "Figma",
        expertise: "Intermediate",
        stars: 3,
      },
      {
        icon: photoshoplogo,
        title: "Photoshop",
        expertise: "Beginner",
        stars: 2,
      },
      {
        icon: premierlogo,
        title: "Premier Pro",
        expertise: "Beginner",
        stars: 2,
      },
    ],
    platformslogo: [
      {
        icon: youtubelogo,
        title: "YouTube",
        expertise: "Beginner",
        stars: 2,
      },
    ],
  };
  return (
    <div className="card">
      <div>
        <CardSection iconProps={contentLogo.softwareIcons} title="Softwares" />
      </div>
      <div style={{ marginTop: "60px" }}>
        <div className="end-line" />
        <CardSection iconProps={contentLogo.platformslogo} title="Platforms" />
      </div>
    </div>
  );
};

export default ContentCard;
