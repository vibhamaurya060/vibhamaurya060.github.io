import React from 'react';
import './Projects.css';
import projectImage1 from '../images/project-1.jpeg';

const projectsData = [
  {
    
    image: projectImage1,
  },
  
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h1>Projects</h1>
      
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h2>Blog Spot</h2>
            <p>Discover insightful articles, personal stories, and expert advice at Blog Spot, your go-to source for diverse and engaging content. Join our community to explore, learn, and grow with us</p>
            <div className="project-links">
              <a href="https://github.com/shobhit9742/Tech-Tatva-2345" target="_blank" rel="noopener noreferrer"><img style={{width:"30px"}} src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" /></a>
              <a style={{marginRight:"92%", marginTop:"-20px"}} href="https://celadon-maamoul-95cda6.netlify.app/index.html" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg></a>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
