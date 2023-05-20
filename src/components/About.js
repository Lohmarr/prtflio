import React from 'react'; 
 
const AboutMe = () => { 
  return ( 
    <section> 
      <div className="row"> 
        <div className="col-md-4"> 
          <section id="about"> 
            <h2>About Me</h2> 
            <img className="img-fluid" src="assets/images/me (2).png" alt="A headshot of Lohmar." /> 
            <p> 
              Hello! My name is Lohmar L'Amour. I'm currently enrolled at the UNCC 
              School of Professional Studies to obtain my certification in Full-Stack 
              Web Development. I brought style and efficiency to my previous jobs as a touring merchandising manager, 
              IATSE stage-hand, and manager of a bar-hopping PedalPub. I look forward to bringing that same panache 
              to whatever tasks you need handled! 
            </p> 
          </section> 
        </div> 
      </div> 
    </section> 
  ); 
}; 
 
export default AboutMe;