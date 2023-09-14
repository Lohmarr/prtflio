import React from 'react';

 const Project = ({title, description, image, link, github}) => {
  return (
    <div className="card col-md-5">
      <img src={image} className="card-img-top" alt="Project Image" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div className='project-links'>
        <a href={link} target="_blank" className="btn btn-primary link">View Project's Website</a>
        <a href={github} target="_blank" className="btn btn-primary link">View Project's Github</a>
        </div>
      </div>
    </div>
  );
};
 export default Project;