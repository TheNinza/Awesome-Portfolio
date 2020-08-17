import React from "react";
import "./content-card.styles.scss";
import CardSection from "../card-section/card-section.component";

import figmalogo from "../../assets/figmalogo.png";
import photoshoplogo from "../../assets/photoshoplogo.png";
import premierlogo from "../../assets/premierlogo.png";
import youtubelogo from "../../assets/youtubelogo.png";

const ContentCard = () => {
  const softwareIcons = [figmalogo, photoshoplogo, premierlogo];
  const platformslogo = [youtubelogo];
  return (
    <div className="card">
      <div>
        <CardSection icons={softwareIcons} title="Softwares" />
      </div>
      <div style={{ marginTop: "60px" }}>
        <div className="end-line" />
        <CardSection icons={platformslogo} title="Platforms" />
      </div>
    </div>
  );
};

export default ContentCard;
