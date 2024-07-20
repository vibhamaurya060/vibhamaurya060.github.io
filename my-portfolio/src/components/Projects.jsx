import React from 'react';
import './Projects.css';
import projectImage1 from '../images/project-1.jpeg';

const projectsData = [
  {
    title: "Blog Spot",
    description: "Discover insightful articles, personal stories, and expert advice at Blog Spot, your go-to source for diverse and engaging content. Join our community to explore, learn, and grow with us",
    github: "https://github.com/shobhit9742/Tech-Tatva-2345",
    live: "https://celadon-maamoul-95cda6.netlify.app/index.html",
    image: projectImage1,
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h1>Projects</h1>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.live} target="_blank" rel="noopener noreferrer">Live</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
