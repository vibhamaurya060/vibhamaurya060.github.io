import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home">
          <strong>Vibha <span style={{ color: "white" }}>Maurya</span></strong>
        </a>
      </div>
      
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <a href="#home" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#techstack">TechStack</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      
      <div className="mobile-menu-toggle" onClick={toggleMenu}>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;