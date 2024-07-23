import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';
import Footer from './components/Footer';
import TechStack from './components/TechStack';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <TechStack/>
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;
