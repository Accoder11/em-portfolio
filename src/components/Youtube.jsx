import React from 'react'
import youtube from '../assets/youtube.png'

function Youtube() {
  return (
    <div className='container'>
      <h2 className='my-5 section-header'><span className="badge rounded-pill bg-primary"><img className="m-1" src={youtube} alt="youtube logo" width="100px" height="100px"/>YouTube Videos</span></h2>
        <div className="row row-cols-1 row-cols-md-2 g-4 bg-primary p-3">
      <div className="col">
        <div className="card">
        <div className="ratio ratio-16x9">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/KwnLDZtaEZs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    </div>
  </div>
  <div className="col">
  <div className="card">
        <div className="ratio ratio-16x9">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/q7DFeL0z_Ck" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    </div>
  </div>
  <div className="col">
  <div className="card">
        <div className="ratio ratio-16x9">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/BKO9cJuIgdI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    </div>
  </div>
  <div className="col">
  <div className="card">
        <div className="ratio ratio-16x9">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/OIP76FD7bgM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Youtube;