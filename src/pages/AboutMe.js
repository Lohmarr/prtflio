import React from "react";
import "../componentStyles/App.css"

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
            <p className="about">
              Hello! My name is Lohmar L'Amour. I have my certification in
              Full-Stack Web Development from UNCC School of Professional
              Studies. I am proficient in a number of web development
              technologies including JavaScript/jQuery,
              MERN Stack, database design, and API design, to name a few. My previous
              experience as a touring merchandising manager, IATSE stage-hand,
              and manager of a bar-hopping PedalPub has honed my ability to
              bring not only style and efficiency, but also creativity and
              problem-solving skills to any task at hand. I look forward to the
              opportunity to apply my skill-set to help bring your software
              development projects to life!
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
