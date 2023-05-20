import React from 'react';

 const Projects = () => {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="container row justify-content-center">
        <div className="card" id="featured">
          <h3><span className="badge bg-warning text-dark">&#9733; Featured Project &#9733;</span></h3>
          <img src="https://cdn.pixabay.com/photo/2016/04/21/15/10/yellow-1343606_960_720.jpg" className="card-img-top" alt="Example Project 1" />
          <div className="card-body">
            <h5 className="card-title">Featured Project</h5>
            <p className="card-text">This is a description of the featured project.</p>
            <a href="featured-project" className="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
      <div className="container row justify-content-center">
        <div className="card col-md-5">
          <img src="https://cdn.pixabay.com/photo/2019/03/21/05/27/flower-4070280_960_720.jpg" className="card-img-top" alt="Example Project 2" />
          <div className="card-body">
            <h5 className="card-title">Project 2</h5>
            <p className="card-text">An example.</p>
            <a href="project-2" className="btn btn-primary">View Project</a>
          </div>
        </div>
        <div className="card col-md-5">
          <img src="https://cdn.pixabay.com/photo/2022/03/28/18/41/hatching-7098132_960_720.png" className="card-img-top" alt="Example Project 3" />
          <div className="card-body">
            <h5 className="card-title">Project 3</h5>
            <p className="card-text">An example.</p>
            <a href="project-3" className="btn btn-primary">View Project</a>
          </div>
        </div>
        <div className="card col-md-5">
          <img src="https://cdn.pixabay.com/photo/2022/07/17/11/59/amber-7327252_960_720.jpg" className="card-img-top" alt="Example Project 4" />
          <div className="card-body">
            <h5 className="card-title">Project 4</h5>
            <p className="card-text">An example.</p>
            <a href="project-4" className="btn btn-primary">View Project</a>
          </div>
        </div>
      </div>
    </section>
  );
};
 export default Projects;