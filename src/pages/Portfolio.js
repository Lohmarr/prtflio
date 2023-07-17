import React from 'react';
import Project from '../components/Project';

const projects = [
  {
    title: "Project 1",
    description: "This is the description for Project 1.",
    image: "https://cdn.pixabay.com/photo/2019/03/21/05/27/flower-4070280_960_720.jpg",
    link: "project-1"
  },
  {
    title: "Project 2",
    description: "This is the description for Project 2.",
    image: "https://cdn.pixabay.com/photo/2019/03/21/05/27/flower-4070280_960_720.jpg",
    link: "project-2"
  },
  {
    title: "Project 3",
    description: "This is the description for Project 3.",
    image: "https://cdn.pixabay.com/photo/2019/03/21/05/27/flower-4070280_960_720.jpg",
    link: "project-3"
  }
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
          />
        ))}
      </div>
    </div>
  );
};

 export default Portfolio;