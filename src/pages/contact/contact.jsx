import React from "react";
import "./contact.styles.scss";

import ContactBackground from "../../assets/contact-wave.png";

const Contact = () => {
  return (
    <div className="contact-container">
      <img
        className="contact-bg-image"
        src={ContactBackground}
        alt="background"
      />
      <div className="contact-content">
        <div className="text-field">
          <div className="impressed">IMPRESSED</div>
          <div className="question">Want to work with me? Awesome!</div>
        </div>
        <div className="contact-me-container">
          <div className="contact-me">Contact Me</div>
        </div>

        <div className="contact-icons-container">
          <div className="contact-icons">
            <i
              class="fa fa-facebook-square"
              aria-hidden="true"
              onClick={() => window.open("https://www.facebook.com/theninzza")}
            ></i>
            <i
              class="fa fa-linkedin-square"
              aria-hidden="true"
              onClick={() =>
                window.open("https://www.linkedin.com/in/niks-gupta/")
              }
            ></i>
            <i
              class="fa fa-instagram"
              aria-hidden="true"
              onClick={() =>
                window.open("https://www.instagram.com/nik_gupta._")
              }
            ></i>
            <i
              class="fa fa-twitter-square"
              aria-hidden="true"
              onClick={() => window.open("https://twitter.com/Nik__Gupta")}
            ></i>
            <i
              class="fa fa-github-square"
              aria-hidden="true"
              onClick={() => window.open("https://www.github.com/theninza")}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
