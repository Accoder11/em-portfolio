import React from 'react';

const Education = () => {
  return (
    <div className="container">
       <div className='row my-5'>
        <div className='col-12'>
          <h2 className='section-header'><span className="badge rounded-pill border"><img className="p-1 rounded-circle" src="https://www.umultirank.org/export/sites/default/.galleries/UMR/covid-story-june-2021/Assessment-of-learning-outcomes-in-higher-education.jpg_516937700.jpg" alt="education logo" width="60px" height="60px"/>Education/Training</span></h2>
        </div>
      </div>

      <div className='container bg-primary border rounded p-3'>
        <div className="card my-3">
          <div className="card-header">
            <h4>College</h4>
          </div>
          <div className="card-body">
            <h5 className="card-title">Bachelor of Elementary Education (BEED)</h5>
            <p className="card-text">
              Eduardo L. Joson Memorial College (ELJMC) <br />
              Palayan City, Nueva Ecija, PH <br />
              SY. 2011 – 2012
            </p>
            <h6>Eligibility</h6>
            <p>
              Licensed Professional Teacher <br />
              PRC Registration No. 1880739
            </p>
          </div>
        </div>

        <div className="card my-3">
          <div className="card-header">
            <h4>KodeGo Bootcamp</h4>
          </div>
          <div className="card-body">
            <h5 className="card-title">Full-stack Web Development</h5>
            <p className="card-text">
              November 2022-February 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education;
