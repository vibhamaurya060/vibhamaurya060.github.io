import React from 'react';
import './Skills.css';


const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h1>Skills</h1>
      <div className="skills-container">
        <div className="skill-card">
          <div className='jsbox'><h1>JS</h1></div>
          <h2>JavaScript</h2>
          <p>Proficient in JavaScript.</p>
        </div>
        <div className="skill-card">
        <div className='jsbox'><h1>R</h1></div>          <h2>React</h2>
          <p>Proficient in React.</p>
        </div>
        <div className="skill-card">
        <div className='jsbox'><h1>Nj</h1></div>          <h2>Node.js</h2>
          <p>Proficient in Node.js.</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
