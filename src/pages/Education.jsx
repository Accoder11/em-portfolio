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
            <h4>Full-stack Web Development</h4>
          </div>
          <div className="card-body">
            <h5 className="card-title">Kodego Bootcamp</h5>
            <h6>Core:</h6>
            <ul className="card-text text-muted">
              <li>Program HTML/CSS/JS Fundamentals</li>
              <li>Develop Front-end using Frameworks and Libraries</li>
              <li>Develop Front-end using ReactJs, Bootstrap, and Figma</li>
              <li>Develop Back-end using PHP/Mysql/JS/Laravel/NodeJs</li>
              <li>Develop Website using CMS</li>
            </ul>
            <p className="card-text">
              November 2022-February 2023
            </p>
          </div>
        </div>

        <div className="card my-3">
          <div className="card-header">
          <h4 className="card-title">Web Development</h4>
          </div>
          <div className="card-body">
            <h5>Mindtech Training And Development Institute Inc.</h5>
            <h5>Technical Education And Skills Development Authority (TESDA)
</h5>
            <h6>Core:</h6>
            <ul className="card-text text-muted">
              <li>Program HTML/CSS/JS Fundamentals</li>
              <li>Develop Front-end using Frameworks Website</li>
              <li>Develop Back-end using PHP/Mysql Website</li>
              <li>Develop Website using CMS</li>
            </ul>
            <p className="card-text">
              February 15, 2021 - March 11, 2021
            </p>
            <p className="card-text text-muted">
            Certificate No. WD-21-0027
            </p>
          </div>
        </div>

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
    </div>
    </div>
  )
}

export default Education;
