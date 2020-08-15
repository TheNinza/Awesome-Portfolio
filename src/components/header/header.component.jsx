import React, { useEffect, useState } from "react";
import "./header.styles.scss";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [currentPath, setCurrentPath] = useState("/");
  const { pathname } = useLocation();
  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);
  return (
    <div className="header-container">
      <div className="options-container">
        <Link
          className={`option-link ${currentPath === "/" ? "about-glow" : null}`}
          to="/"
        >
          About
        </Link>
        <Link
          className={`option-link ${
            currentPath === "/skills" ? "skills-glow" : null
          }`}
          to="/skills"
        >
          Skills
        </Link>
        <Link
          className={`option-link ${
            currentPath === "/projects" ? "projects-glow" : null
          }`}
          to="/projects"
        >
          Projects
        </Link>
        <Link
          className={`option-link ${
            currentPath === "/contact" ? "contact-glow" : null
          }`}
          to="/contact"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
