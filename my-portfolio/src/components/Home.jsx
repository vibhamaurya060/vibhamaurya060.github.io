import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home">
      <h4>Hello, my name is</h4>
      <h1>Vibha Maurya</h1>
      <p>And I'm a <span className='full'>full stack Developer!</span></p>
      <button className='resume'><a href='https://drive.google.com/file/d/1NoO0eECrOdzNG2PupSN_zRX6vwPUsOOa/view?usp=drive_link'  target="_blank">Resume</a></button>
    </section>
  );
};

export default Home;
