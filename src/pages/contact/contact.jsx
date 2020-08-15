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
    </div>
  );
};

export default Contact;
