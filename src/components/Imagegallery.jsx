import React from 'react'
import canva from '../assets/canva.png'

function Imagegallery() {
  return (
    <div className='container'>
        <h3 className='my-5 section-header'>
          <span className="badge rounded-pill bg-primary"><img className="m-3" src={canva} alt="canva logo" width="70px" height="70px"/>Canva</span></h3>
        <div className="row row-cols-1 row-cols-md-3 g-4 bg-primary p-3">
  <div className="col">
    <div className="card">
      <img src="https://quotessharing.com/wp-content/uploads/2022/09/word-image-11163-4.png" className="card-img-top" alt="..." />
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://www.quotessharing.com/wp-content/uploads/2022/08/word-image-10050-3.png" className="card-img-top" alt="..." />
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://www.quotessharing.com/wp-content/uploads/2022/08/word-image-10050-28.png" className="card-img-top" alt="..." />
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://www.quotessharing.com/wp-content/uploads/2022/12/word-image-11376-7.png" className="card-img-top" alt="..." />
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://www.quotessharing.com/wp-content/uploads/2022/12/word-image-11376-8.png" className="card-img-top" alt="..." />
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://quotessharing.com/wp-content/uploads/2022/09/word-image-11163-2.png" className="card-img-top" alt="..." />
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://www.quotessharing.com/wp-content/uploads/2022/12/word-image-11376-16.png" className="card-img-top" alt="..." />
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://quotessharing.com/wp-content/uploads/2022/09/word-image-11163-3.png" className="card-img-top" alt="..." />
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://www.quotessharing.com/wp-content/uploads/2022/09/word-image-11067-18.png" className="card-img-top" alt="..." />
    </div>
  </div>
</div>
    </div>
  )
}

export default Imagegallery;