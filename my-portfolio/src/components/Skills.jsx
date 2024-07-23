import React from 'react';
import './Skills.css';


const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h1>Skills</h1>
      <div className="skills-container">
        <div className="skill-card">
          <div className='jsbox'><img  src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="js" /></div>
          <h2>JavaScript</h2>
          <p>Proficient in JavaScript.</p>
        </div>
        <div className="skill-card">
        <div className='jsbox'><img  src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="react" /></div>          
        <h2>React</h2>
          <p>Proficient in React.</p>
        </div>
        <div className="skill-card">
        <div className='jsbox'><img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="nodejs" /></div>          
        <h2>Node.js</h2>
          <p>Proficient in Node.js.</p>
        </div>
        <div className="skill-card">
        <div className='jsbox1'><img src="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" alt="java" /></div>          
        <h2>Java</h2>
          <p>Proficient in Java.</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
