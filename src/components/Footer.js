import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import githubImg from '../images/github-mark.svg'
import linkedInImg from '../images/linkedin.svg'

 const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <a href="github-link" target="https://github.com/Lohmarr" rel="noopener noreferrer">
        <img src={githubImg} alt='Github logo' />
        </a>
        <a href="linkedin-link" target="/" rel="noopener noreferrer">
        <img src={linkedInImg} alt='Linked In logo' />
        </a>
      </div>
    </footer>
  );
};
 export default Footer;