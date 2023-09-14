import React from "react";
import "../componentStyles/App.css";

const AboutMe = () => {
  return (
    <section>
      <div>
        <div>
          <section id="about">
            <h2>About Me</h2>
            <img
              className="headshot"
              src={require("../images/me.png")}
              alt="A headshot of Lohmar."
            />
            <p className="summary">
              Certified Junior Full Stack Web Developer. Possesses a remarkable
              ability to quickly grasp new concepts and exhibits an unwavering
              passion for the ever-evolving tech industry. Committed to staying
              at the forefront of competency in any respective role, and eager
              to seek out knowledge while adapting to new challenges. A
              collaborative nature and experience with varying professional
              perspectives, which will be an asset to any team.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
