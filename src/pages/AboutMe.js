import React from "react";
import "simpledotcss/simple.min.css";

const AboutMe = () => {
  return (
    <section>
      <div className="row">
        <div className="col-md-4">
          <section id="about">
            <h2>About Me</h2>
            <img
              className="img-fluid"
              src="../images/me.png"
              alt="A headshot of Lohmar."
            />
            <p>
              Hello! My name is Lohmar L'Amour. I have a certification in
              Full-Stack Web Development from UNCC School of Professional
              Studies. I am proficient in a number of web development
              technologies including HTML, CSS, Git, Bash, JavaScript/jQuery,
              MERN Stack , database design, and API design. My previous
              experience as a touring merchandising manager, IATSE stage-hand,
              and manager of a bar-hopping PedalPub has honed my ability to
              bring not only style and efficiency, but also creativity and
              problem-solving skills to any task at hand. I look forward to the
              opportunity to apply my new skills to help bring your web
              development projects to life!
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
