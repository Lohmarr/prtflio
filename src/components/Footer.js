import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";

 const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <a href="github-link" target="https://github.com/Lohmarr" rel="noopener noreferrer"><i className="fa fa-github" aria-hidden="true"></i></a>
        <a href="linkedin-link" target="/" rel="noopener noreferrer"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
        <a href="twitter-link" target="/" rel="noopener noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i></a>
      </div>
    </footer>
  );
};
 export default Footer;