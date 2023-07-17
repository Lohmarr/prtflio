import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import githubImg from "../images/github-mark.svg";
import linkedInImg from "../images/linkedin.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h3>Check out my stuff below!</h3>
        <div className="socials float">
          <a
            href="https://github.com/Lohmarr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubImg} alt="Github logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/lohmar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="delay" src={linkedInImg} alt="Linked-In logo" />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
