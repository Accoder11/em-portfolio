import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import About from '../components/About';
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <div>
      <div className="hero-image text-center">
        <div className="hero-text container-fluid">
          <h1>Hello, I'm Alma Cleto</h1>
          <h2>
          <Typewriter
        options={{
          strings: ["And I'm a Licensed ESL Teacher", "& E-commerce Operations Specialist"],
          autoStart: true,
          loop: true,
          }}/>
          </h2>
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
