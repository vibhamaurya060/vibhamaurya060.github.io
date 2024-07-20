import React from 'react';
import './About.css';

import photo from '../images/vibha_Photo.jpeg';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>Who i am</p>
      <div className="container">
      <div className="photo-section">
          <img src={photo} alt="My Photo" />
        </div>
        <div className="text-section">
          <h2>Hi, I'm <span style={{color:"orange"}}>Vibha Maurya a</span> Full Stack Web devloper</h2>
          <p>I am an aspiring full stack web developer with a passion for creating dynamic and responsive web applications. With a strong foundation in both front-end and back-end technologies, I enjoy bringing ideas to life in the browser. My expertise includes working with modern frameworks, databases, and tools to build scalable and efficient applications. I'm continuously learning and exploring new technologies to enhance my skills and contribute effectively to innovative projects.</p>
        </div>
        
      </div>
    </section>
  );
};

export default About;
