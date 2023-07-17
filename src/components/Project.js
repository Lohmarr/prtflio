import React from 'react';

 const Project = ({title, description, image, link}) => {
  return (
    <div className="card col-md-5">
      <img src={image} className="card-img-top" alt="Example Project 2" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={link} className="btn btn-primary">View Project</a>
      </div>
    </div>
  );
};
 export default Project;