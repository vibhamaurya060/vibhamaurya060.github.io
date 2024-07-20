import React from 'react';
import './TechStack.css';
import htmlLogo from '../images/html-logo.png';
import cssLogo from '../images/css-logo.png';
import jsLogo from '../images/js-logo.png';
import reactLogo from '../images/react-logo.png';
import nodejsLogo from '../images/nodejs-logo.png';
import mongodbLogo from '../images/mongodb-logo.png';
import gitLogo from '../images/github-logo.png';
import expressjsLogo from '../images/expressjs_logo.png';
import javaLogo from '../images/java-logo.png';

const TechStack = () => {
  const technologies = [
    { image: htmlLogo },
    { image: cssLogo},
    { image: jsLogo},
    { image: reactLogo },
    { image: nodejsLogo },
    { image: expressjsLogo},
    { image: mongodbLogo},
    { image: gitLogo},
    { image: javaLogo},
  ];

  return (
    <div className="tech-stack">
      <h2>Tech Stack</h2>
      <div className="tech-list">
        {technologies.map((tech, index) => (
          <div className="tech-item" key={index}>
            <img src={tech.image} alt={tech.name} className="tech-icon" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
