import React from 'react';
import {useTypewriter} from 'react-simple-typewriter';
import './Home.css';

const Home = () => {
  const [typeEffect]=useTypewriter({
    words: ['full stack web Developer!','full stack web Developer!','full stack web Developer!'],
    loop: {},
    typeSpeed:100,
    deleteSpeed:50,
  });
  
  return (
    <section id="home" className="home">
      <h4>Hello, my name is</h4>
      <h1>Vibha Maurya</h1>
      <p>And I'm a <span className='full'>{typeEffect}</span>
      </p>
      <button className='resume'><a href='https://drive.google.com/file/d/1Qgw8UCcsQ-mWgZ9PBPjW6pS9NN9NIFr1/view?usp=sharing'  target="_blank">Resume</a></button>
    </section>
  );
};

export default Home;
