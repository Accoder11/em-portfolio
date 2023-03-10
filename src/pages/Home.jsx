import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';
import heroimage from '../assets/heroimage.jpg';
import { Fade } from "react-awesome-reveal";
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import About from '../components/About';

const Home = () => {
  const heroStyle = {
    backgroundImage: `url(${heroimage})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '90vh',
  };

  return (
    <div>
      <div className="hero-image text-center" style={heroStyle}>
        <div className="hero-text">
          <h1>Hi! I am Alma Cleto</h1>
          <p>And I'm a Web Developer</p>
        </div>
        <div className="profile">
          <NavLink exact to="/contact">
            <button
              type="button"
              className="btn btn-primary"
            >
              Hire me
            </button>
          </NavLink>
        </div>
      </div>
      <Navbar />
      <div className="container-fluid">
        <Fade direction="left">
          <About />
        </Fade>
        <Fade direction="right">
          <Education />
        </Fade>
        <Fade direction="left">
          <Experience />
        </Fade>
        <Projects />
        <Fade direction="left">
          <Contact />
        </Fade>
      </div>
    </div>
  );
};

export default Home;
