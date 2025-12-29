import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProfessionalMaintenance = () => (
  <div className="container d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh', textAlign: 'center', backgroundColor: '#ffffff' }}>
    <div className="p-4 p-md-5 shadow-lg bg-white border-top border-5 border-primary" style={{ maxWidth: '700px', borderRadius: '15px' }}>
      
      {/* Professional Icon/Badge placeholder */}
      <div className="mb-4">
        <span className="badge rounded-pill bg-primary px-3 py-2 text-uppercase fw-bold" style={{ letterSpacing: '1px' }}>
          Technical Sprint in Progress
        </span>
      </div>

      <h1 className="fw-bold text-dark mb-3">Portfolio Under Transformation</h1>
      
      <p className="lead text-secondary mb-4" style={{ fontSize: '1.2rem' }}>
        I am currently undergoing an <strong>intensive technical specialization sprint</strong> to align my background in 
        Education and Healthcare with industry-standard <strong>Technical Support and System Administration.</strong>
      </p>

      <hr className="my-4 mx-auto" style={{ width: '50%', opacity: '0.1' }} />

      <div className="row text-start justify-content-center">
        <div className="col-auto">
          <ul className="list-unstyled text-muted small">
            <li><i className="text-primary me-2">✔</i> Tier 1 & 2 Support Methodology</li>
            <li><i className="text-primary me-2">✔</i> Network & Hardware Diagnostics</li>
            <li><i className="text-primary me-2">✔</i> System Architecture & Logic</li>
          </ul>
        </div>
      </div>

      <p className="mt-4 text-muted small italic">
        The full experience will be live soon. Thank you for your patience.
      </p>
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<ProfessionalMaintenance />} />
      </Routes>
    </Router>
  );
};

export default App;
