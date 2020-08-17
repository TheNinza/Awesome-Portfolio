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
  const DevelopmentIcons = {
    frontend: [
      {
        icon: HtmlLogo,
        title: "HTML 5",
        expertise: "Advanced",
        stars: 4,
      },
      {
        icon: CssLogo,
        title: "CSS 3",
        expertise: "Advanced",
        stars: 4,
      },
      {
        icon: ScssLogo,
        title: "Sass",
        expertise: "Intermediate",
        stars: 3,
      },
      {
        icon: Javascript,
        title: "Javascript",
        expertise: "Intermediate",
        stars: 3,
      },
      {
        icon: ReactLogo,
        title: "React",
        expertise: "Expert",
        stars: 4,
      },
      {
        icon: ReduxLogo,
        title: "Redux",
        expertise: "Expert",
        stars: 4,
      },
      {
        icon: GraphQlLogo,
        title: "GraphQl",
        expertise: "Intermediate",
        stars: 3,
      },
      {
        icon: gatsbylogo,
        title: "Gatsby JS",
        expertise: "Beginner",
        stars: 2,
      },
    ],
    database: [
      {
        icon: postgreslogo,
        title: "PostgresSql",
        expertise: "Intermediate",
        stars: 4,
      },
      {
        icon: mysqllogo,
        title: "MySql",
        expertise: "Intermediate",
        stars: 3,
      },
      {
        icon: firestorelogo,
        title: "Firestore",
        expertise: "Intermediate",
        stars: 4,
      },
      {
        icon: mongologo,
        title: "MongoDB",
        expertise: "Beginner",
        stars: 1,
      },
    ],
    backend: [
      {
        icon: nodejslogo,
        title: "NodeJS",
        expertise: "Expert",
        stars: 4,
      },
      {
        icon: firebaselogo,
        title: "Firebase",
        expertise: "Intermediate",
        stars: 4,
      },
    ],
  };

  return (
    <div className="card">
      <div>
        <CardSection iconProps={DevelopmentIcons.frontend} title="FrontEnd" />
      </div>
      <div>
        <div className="end-line" />
        <CardSection iconProps={DevelopmentIcons.backend} title="BackEnd" />
      </div>
      <div>
        <div className="end-line" />
        <CardSection iconProps={DevelopmentIcons.database} title="Databases" />
      </div>
    </div>
  );
};

export default DevelopmentCard;
