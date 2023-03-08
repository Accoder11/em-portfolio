import React from 'react'
import profilepic from '../assets/profilepic.png'

function About() {
  return (

<div className="container">
<h2 className='section-header my-5'><span className="badge rounded-pill border"><img className="p-1 rounded-circle" src="https://www.citypng.com/public/uploads/small/11639961100oflqsg0lqmroihxbbfffckhnw2crcvlavp4dyhu8jk63aqzzduaeyb8x5s5c3zbt92n0oqolewqpgwlq9lcnr72mhhfichlamz4c.png" width="80px" height="80px"/>About Me</span></h2>

<div className="row border rounded p-4">
  <div className="col">
  <div class="card my-2 mx-auto" style={{maxWidth: "50rem"}}>
  <div class="row g-3">
    <div class="col-md-5 p-4">
      <img src={profilepic} class="img-fluid rounded-start" alt="..." />
    </div>
    <div class="col-md-7">
      <div class="card-body">
      <div className="card bg-primary p-2 border rounded">
        <div className="card-body">
          <p className="card-text about-me">As a web developer with a background in content curation and
        social media management, I possess strong adaptability and
        problem-solving skills, as well as a passion for continuous
        learning. With my experience in video production, data
        analysis, and content creation, I have developed a keen eye for
        detail and a unique perspective that enable me to excel in web
        development fundamentals like HTML, CSS, and Javascript.
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