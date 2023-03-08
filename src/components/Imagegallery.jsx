import React from 'react'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import pic2 from '../assets/2.png'
import pic3 from '../assets/3.png'
import pic4 from '../assets/4.png'
import pic5 from '../assets/5.png'
import pic6 from '../assets/6.png'
import pic7 from '../assets/7.png'

function Imagegallery() {
  return (
    <div className='container my-5'>
        <h2 className='section-header'>
          <span className="badge rounded-pill border"><img className="m-1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/2048px-Canva_icon_2021.svg.png" alt="canva logo" width="60px" height="60px"/>Canva Projects</span></h2>
        <div className="row row-cols-1 row-cols-md-3 g-4 bg-primary p-3 my-5 border rounded">
  <div className="col">
    <div className="card">
      <img src={img3} className="card-img-top" alt="canva project" />
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={img4} className="card-img-top" alt="canva project" />
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={pic2} className="card-img-top" alt="canva project" />
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={pic3} className="card-img-top" alt="canva project" />
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={pic4} className="card-img-top" alt="canva project" />
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={pic5} className="card-img-top" alt="canva project" />
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={pic6} className="card-img-top" alt="canva project" />
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={pic7}  className="card-img-top" alt="canva project" />
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={img5} className="card-img-top" alt="canva project" />
    </div>
  </div>
</div>
    </div>
  )
}

export default Imagegallery;