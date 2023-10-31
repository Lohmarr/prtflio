import React from "react";
import Project from "../components/Project";

const projects = [
  {
    title: "Songrex",
    description: `Songrex is a full stack web application that allows users to view songs by genre, artist, and album, 
      and also post new songs by embedding their own favorite songs using Spotify's embed feature. 
      This application was built using Node.js and Express.js to create a RESTful API, 
      Handlebars.js as the template engine, and MySQL for the database.`,
    image: require("../images/songrex.png"),
    link: "https://songrex-f5dc5d07d801.herokuapp.com/",
    github: "https://github.com/Lohmarr/songrex",
  },
  {
    title: "Wingman",
    description: `Wingman is a full stack web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack.
    It features user registration and authentication, profiles with updatable information, sorting,
    posting, liking, and responsive web design.`,
    image: require("../images/wingman.png"),
    link: "https://wngmn-72e58af3a89c.herokuapp.com/",
    github: "https://github.com/Lohmarr/wngmn",
  },
  {
    title: "Just Movie Recs",
    description: `Just Movie Recs is a full stack web application that allows users to post 
    and discover movie recommendations. It it built with Spring Boot, Angular, 
    and includes JWT Authentication with authentication protected routing.`,
    image: require("../images/jmr.png"),
    link: "https://jmr-frontend-09ea084b198b.herokuapp.com/",
    github: "https://github.com/Lohmarr/jmr_backend",
  },
];

const Portfolio = () => {
  return (
    <div className="container">
      <h2>My Portfolio</h2>
      <div className="row">
        {projects.map((project) => (
          <Project
            key={project.link}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            github={project.github}
          />
        ))}
      </div>
      <h4>
        Contact me for access to various other smaller scale projects of mine.
      </h4>
    </div>
  );
};

export default Portfolio;
