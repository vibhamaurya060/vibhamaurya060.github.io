import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Vibha <span>Maurya</span></h3>
          <p>Creative developer passionate about building intuitive, innovative web experiences.</p>
          <div className="social-links">
            <a href="https://github.com/vibhamaurya060" aria-label="GitHub"><i className="fab fa-github"></i><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" /></a>
            <a href="https://www.linkedin.com/in/vibhamaurya060/" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" /></a>
          </div>
        </div>
        
        <div className="footer-center">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-right">
          <h4>Contact Me</h4>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <p>vibha@example.com</p>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <p>+91 9876543210</p>
          </div>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <p>India</p>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom"> 
        <p>&copy; {currentYear} Vibha Maurya. All Rights Reserved.</p>
        <p className="credit">Made with <i className="fas fa-heart"></i> and React</p>
      </div>
    </footer>
  );
};

export default Footer;