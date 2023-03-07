import React from 'react';

function Education() {
  return (
    <div>
    <div className="container">
      <h2 className='my-5 section-header'><span class="badge rounded-pill bg-primary">Educational Background and Training</span></h2>
      
    <div className="card my-5">
  <div className="card-header">
    <h4>College</h4>
  </div>
  <div className="card-body">
  <h5 className="card-title">Bachelor of Elementary Education (BEED)</h5>
        <p className="card-text">Eduardo L. Joson Memorial College (ELJMC)
          <br />
        Palayan City, Nueva Ecija, PH
        <br />
        SY. 2011 – 2012
        </p>
        <h6>Eligibility</h6>
        <p>
        Licensed Professional Teacher
        <br />
        PRC Registration No. 1880739
        </p>
  </div>
</div>

<div className="card">
  <div className="card-header">
    <h4>KodeGo Bootcamp</h4>
  </div>
  <div className="card-body">
  <h5 className="card-title">Full-stack Web Development</h5>
        <p className="card-text">November 2022-February 2023
        </p>
  </div>
</div>
</div>
</div>
  )
}

export default Education;
