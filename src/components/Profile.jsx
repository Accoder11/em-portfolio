import React from 'react'

function Profile() {
  return (
    <div>

<button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal">
  About Me
</button>

<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">About Me</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      As a web developer with a background in content
curation and social media management, I possess strong
adaptability and problem-solving skills, as well as a
passion for continuous learning. With my experience in
video production, data analysis, and content creation, I
have developed a keen eye for detail and a unique
perspective that enable me to excel in web development
fundamentals like HTML, CSS, and Javascript.
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Profile