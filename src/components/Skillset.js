import React from 'react';

const SkillList = () => {
  const skillsets = [
    {
      category: 'Programming Languages',
      skills: ['JavaScript', 'CSS', 'HTML5'],
    },
    {
      category: 'Databases',
      skills: ['GraphQL', 'MongoDB', 'MySQL'],
    },
    {
      category: 'Cloud Services',
      skills: ['Heroku'],
    },
    {
      category: 'Frameworks and Libraries',
      skills: ['React.js', 'Node.js', 'Express.js', 'Handlebars.js','jQuery', 'Bootstrap', 'Tailwind'],
    },
    {
      category: 'Version Control',
      skills: ['Git', 'GitHub', 'GitLab'],
    },
    {
      category: 'Other Concepts and Technologies',
      skills: ['RESTful API', 'Agile', 'Object-Oriented Programming (OOP)', 'Progressive Web Applications (PWAs)', 'User Authentication', 'Unit Testing', 'Full-stack development', 'MERN Stack (MongoDB, Express.js, React, Node.js)'],
    },
    {
      category: 'Upcoming Skills From Remaining Courses at UNCC School of Professional Studies',
      skills: ['Python', 'AWS', 'C#', 'Java'],
    },
  ];

  return (
    <div>
      {skillsets.map((skillset, index) => (
        <div key={index}>
          <h4>{skillset.category}</h4>
          <ul>
            {skillset.skills.map((skill, skillIndex) => (
              <li key={skillIndex}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SkillList;
