import React from "react";
import Skillset from "../components/Skillset";

const Resume = () => {
  return (
    <section>
      <div className="resume-content">
        <h2>Resume</h2>
        <p>
          Download my full resume{" "}
          <a
            href="https://docs.google.com/document/d/14owGIFHO7D_pPQWhgcv72aXe3EZjpIanp5T89yikmIo/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            here
          </a>
          .
        </p>
        <h3>Proficiencies</h3>
        <ul>
          <Skillset />
        </ul>
      </div>
    </section>
  );
};
export default Resume;
