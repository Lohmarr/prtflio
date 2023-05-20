import React from 'react';
import 'simpledotcss/simple.min.css';
import Skillset from '../components/Skillset'

 const Resume = () => {
  return (
    <section>
      <div className="resume-content">
        <h2>Resume</h2>
        <p>Download my resume <a href="path-to-resume" target="_blank" rel="noopener noreferrer">here</a>.</p>
        <h3>Proficiencies</h3>
        <ul>
          <Skillset/>
        </ul>
      </div>
    </section>
  );
};
 export default Resume;