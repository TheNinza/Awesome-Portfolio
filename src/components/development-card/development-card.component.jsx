import React from "react";
import "./development-card.styles.scss";
import CardSection from "../card-section/card-section.component";

import HtmlLogo from "../../assets/logo-html5.png";
import CssLogo from "../../assets/csslogo.png";
import ScssLogo from "../../assets/scsslogo.png";
import Javascript from "../../assets/javascriptlogo.png";
import ReactLogo from "../../assets/reactlogo.png";
import ReduxLogo from "../../assets/reduxlogo.png";
import GraphQlLogo from "../../assets/graphqllogo.png";
import gatsbylogo from "../../assets/gatsbylogo.png";
import nodejslogo from "../../assets/nodejslogo.png";
import firebaselogo from "../../assets/firebaselogo.png";
import postgreslogo from "../../assets/postgreslogo.png";
import mysqllogo from "../../assets/mysqllogo.png";
import firestorelogo from "../../assets/firestorelogo.png";
import mongologo from "../../assets/mongologo.png";

const DevelopmentCard = () => {
  const frontendIcons = [
    HtmlLogo,
    CssLogo,
    ScssLogo,
    Javascript,
    ReactLogo,
    ReduxLogo,
    GraphQlLogo,
    gatsbylogo,
  ];

  const backendIcons = [nodejslogo, firebaselogo];
  const databaseIcons = [postgreslogo, mysqllogo, firestorelogo, mongologo];

  return (
    <div className="card">
      <div>
        <CardSection icons={frontendIcons} title="FrontEnd" />
      </div>
      <div>
        <div className="end-line" />
        <CardSection icons={backendIcons} title="BackEnd" />
      </div>
      <div>
        <div className="end-line" />
        <CardSection icons={databaseIcons} title="Databases" />
      </div>
    </div>
  );
};

export default DevelopmentCard;
