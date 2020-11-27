import React from "react";
import "./projects.styles.scss";

import ProjectsBackground from "../../assets/projects-wave.png";
import ProjectCard from "../../components/project-card/project-card";

import crwnClothing from "../../assets/crwn-clothing.png";
import quarantinePortal from "../../assets/quarantinePortal.png";
import awesomePortfolio from "../../assets/awesomePortfolio.png";
import smartbrain from "../../assets/smartbrain.png";
import robofriends from "../../assets/robofriends.png";

import SwiperCore, { Navigation, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, EffectCoverflow]);

const Projects = () => {
  const projects = [
    {
      image: crwnClothing,
      title: "Crwn-Clothing",
      descreption:
        "This is the demo of a online e-commerce site. Also being an PWA, it uses React, Redux with Redux Sagas and Firebase.",
      liveLink: "https://crwn-ninza.herokuapp.com",
      sourceLink: "https://github.com/TheNinza/crwn-clothing",
    },
    {
      image: quarantinePortal,
      title: "Quarantine Portal",
      descreption:
        "A management portal for covid centers with live patient count. Uses React, Express and Mysql.",
      liveLink: "https://theninza.github.io/quarantineportal",
      sourceLink: "https://github.com/TheNinza/quarantineportal",
    },
    {
      image: awesomePortfolio,
      title: "Awesome Portfolio",
      descreption:
        "A portfolio website using React. All the sections are detailed and complete in there own sense.",
      liveLink: "",
      sourceLink: "",
    },
    {
      image: smartbrain,
      title: "Smart-Brain",
      descreption:
        "A face detection website with AI capabilities. A rest-api using express, also handling the signIn. Uses React.",
      liveLink: "https://theninza.github.io/smart-brain",
      sourceLink: "https://github.com/TheNinza/smart-brain",
    },
    {
      image: robofriends,
      title: "Robofriends",
      descreption:
        "A search website which searches for robots. An interactive searchbox and all is made withe the help of React",
      liveLink: "https://theninza.github.io/smart-brain",
      sourceLink: "https://github.com/TheNinza/smart-brain",
    },
  ];

  return (
    <div className="projects-container">
      <img
        className="projects-bg-image"
        src={ProjectsBackground}
        alt="background"
      />
      <div className="projects-content">
        <div className="carausel-container">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={4}
            loop={true}
            navigation={{ nextEl: ".next-button", prevEl: ".prev-button" }}
            style={{ padding: "20px 0" }}
          >
            {projects.map((project, i) => (
              <SwiperSlide key={i}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="next-button">
            <div className="next-triangle"></div>
          </div>
          <div className="prev-button">
            <div className="prev-triangle"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
