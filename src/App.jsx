import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Education from './pages/Education';
import Projects from './pages/Projects'
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Footer from './components/Footer'
import Navbar from './components/Navbar';


const App = () => {

  const ConditionalNavbar = () => {
    const location = useLocation();
  
    if (location.pathname === '/') {
      return null;
    }
    return <Navbar />;
  };

  return (
    <Router>
      <ConditionalNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
