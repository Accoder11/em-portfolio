import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Simple Private Maintenance Component
const Maintenance = () => (
  <div className="container d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh', textAlign: 'center', backgroundColor: '#f8f9fa' }}>
    <div className="p-5 shadow-sm bg-white rounded-lg" style={{ maxWidth: '600px', borderRadius: '15px' }}>
      <h1 className="display-5 text-dark mb-4">Portfolio Update in Progress</h1>
      <p className="lead text-secondary mb-4">
        I am currently refining my digital portfolio to better showcase my transition into 
        <strong> Technical Support and User Empowerment.</strong>
      </p>
      <p className="text-muted">
        To protect my data privacy during this maintenance phase, I have temporarily hidden my contact details. 
        However, I am still open to professional networking!
      </p>
      
      <div className="mt-4">
        {/* Replace the '#' below with your actual LinkedIn URL */}
        <a 
          href="https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-primary btn-lg shadow-sm"
        >
          Connect with me on LinkedIn
        </a>
      </div>
      
      <p className="mt-5 small text-uppercase fw-bold text-primary" style={{ letterSpacing: '2px' }}>
        See you again soon
      </p>
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        {/* This captures all routes and shows the maintenance page */}
        <Route path="*" element={<Maintenance />} />
      </Routes>
    </Router>
  );
};

export default App;
