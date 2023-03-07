import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';
import heroimage from '../assets/heroimage.jpg';
import Education from './Education';
import Profile from '../components/Profile';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact'

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
          <h1 style={{fontSize: '4.5rem'}}>Hi! I am Alma Cleto</h1>
          <p>And I'm a Web Developer</p>
        </div>
        <div className='profile'>
        <NavLink exact to="/contact"><button type="button" className="btn btn-primary btn-lg" style={{ display: 'inline-block', margin: '10px 20px' }}>
            Hire me
          </button></NavLink>
          <span style={{ display: 'inline-block' }}>
            <Profile />
          </span>
        </div>
      </div>
       <Navbar />
       <div className="container-fluid">
      <Education />
      <Experience />
      <Projects />
      <Contact />
      </div>
    </div>
  );
}

export default Home;
