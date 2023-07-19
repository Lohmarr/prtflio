import React, { useState, useEffect, useMemo } from "react";
import { useTrail, animated } from "react-spring";

const LandingPage = () => {
  const [tech, setTech] = useState("");
  const [showString, setShowString] = useState(false);

  const technologies = useMemo(() => [
    "CSS", "HTML", "JavaScript", "jQuery", "Node.js", "Express.js", 
    "React.js", "Handlebars.js", "PWAs", "MySQL", "MongoDB",
    "GraphQL", "AJAX", "RESTful API", "Git", "Authentication", 
    "MERN Stack", "Heroku", "Unit Testing"
  ], []);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    const shuffledTech = shuffleArray(technologies);
    setTech(shuffledTech[0]);
  }, [technologies]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowString(true);
    }, 2000); // Delay before showing the second string

    return () => clearTimeout(timeout);
  }, []);
  useEffect(() => {
    if (showString) {
      const interval = setInterval(() => {
        setTech((prevTech) => {
          const currentIndex = technologies.indexOf(prevTech);
          const nextIndex = (currentIndex + 1) % technologies.length;
          return technologies[nextIndex];
        });
      }, 2000); // Interval to change the tech

      return () => clearInterval(interval);
    }
  }, [showString, technologies]);

  const text = "welcome to my portfolio";
  const letters = text.split("");

  const trail = useTrail(letters.length, {
    from: { opacity: 0, y: -50 },
    to: { opacity: 1, y: 0 },
    config: { duration: 100 }
  });

  return (
    <div className="landing-page">
      <h1 className="welcome">
        {trail.map((props, index) => (
          <animated.span key={index} style={props}>
            {letters[index]}
          </animated.span>
        ))}
      </h1>
      {showString && (
        <h2 className="fade-in">
          I'm <span className="name">Lohmar</span>! 
          Here you can view my experience with{" "}
          <span className="tech-word fade-in-out">{tech}</span>
        </h2>
      )}
    </div>
  );
};

export default LandingPage;