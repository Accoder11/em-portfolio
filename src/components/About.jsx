import React from 'react'
import profilepic from '../assets/profilepic.png'

function About() {
  return (

    <div className="container">
      <h2 className='section-header my-5'><span className="badge rounded-pill border"><img className="p-1 rounded-circle" src="https://www.citypng.com/public/uploads/small/11639961100oflqsg0lqmroihxbbfffckhnw2crcvlavp4dyhu8jk63aqzzduaeyb8x5s5c3zbt92n0oqolewqpgwlq9lcnr72mhhfichlamz4c.png" width="60px" height="60px" />About Me</span></h2>

      <div className="row border rounded p-4">
        <div className="col ">
          <div class="card border rounded my-2 mx-auto" style={{ maxWidth: "50rem" }}>
            <div class="row g-3">
              <div class="col-md-5 p-4">
                <img src={profilepic} class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-7">
                <div class="card-body">
                  <div className="card bg-primary p-2 border rounded">
                    <div className="card-body">
                      <p className="card-text about-me">
                        Detail-focused Digital Operations Specialist and Licensed Teacher (LPT). I deliver guaranteed error-free, non-call backend support leveraging hands-on experience in CMS (WordPress/Hostinger), SEO, data analytics, and educational video production.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;