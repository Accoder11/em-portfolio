import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';
import heroimage from '../assets/heroimage.jpg';
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