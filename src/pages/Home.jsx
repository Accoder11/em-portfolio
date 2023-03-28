import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';
import heroimage from '../assets/heroimage.jpg';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import About from '../components/About';
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <div>
      <div className="hero-image text-center" style={{ backgroundImage: `url(${heroimage})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '130vh' }}>
        <div className="hero-text">
          <h1>
          <Typewriter
        options={{
          strings: ["Hello", "I'm Alma Cleto", "And I'm a Web Developer"],
          autoStart: true,
          loop: true,
          }}/>
          </h1>
        </div>
        <div className="profile">
          <NavLink exact to="/contact">
            <button type="button" className="btn btn-primary">
              Hire me
            </button>
          </NavLink>
        </div>
      </div>
      <Navbar />
      <div className="container-fluid">
      
        <About />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
