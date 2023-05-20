import React from "react";

 function SkillSet() {
  return (
    <div>
      <h3>Acquired Skillsets</h3>
      <ul className="list-group mb-2">
        <li className="list-group-item">HTML</li>
        <li className="list-group-item">CSS</li>
        <li className="list-group-item">Git</li>
        <li className="list-group-item">Bash</li>
      </ul>
      <h3>Upcoming Skillsets</h3>
      <div className="container">
        <ul className="list-group">
          <li className="list-group-item">JavaScript/jQuery</li>
          <li className="list-group-item">MERN Stack (MongoDB, Express.js, React.js, Node.js)</li>
          <li className="list-group-item">MySQL</li>
          <li className="list-group-item">API Design</li>
          <li className="list-group-item">Python</li>
          <li className="list-group-item">Java</li>
          <li className="list-group-item">Amazon Web Services</li>
          <li className="list-group-item">C#</li>
        </ul>
      </div>
    </div>
  );
}
 export default SkillSet;