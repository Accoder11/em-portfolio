import React from 'react'
import webdev from '../assets/webdev.png'
import Tools from '../components/Tools'

const Webdev = () => {
  return (
    <div className='container-fluid'>
        <div className='container p-3'>
        <h3 className='section-header my-5'><span className="badge rounded-pill bg-primary"><img className="m-2" src={webdev} alt="canva logo" width="80px" height="80px"/>Web Development</span></h3>
        <Tools />
        <div className="row row-cols-1 row-cols-md-3 g-5 text-center bg-primary my-2 py-2">
  <div className="col">
    <div className="card">
    <iframe src="https://www.quotessharing.com/" title="Embedded Website" width="100%" height="500px"></iframe>
      <div className="card-body">
    <a className="btn btn-primary card-link" href="https://www.quotessharing.com/" target="_blank">Website Build with WordPress</a>
  </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <iframe src="https://emcleto-todoapp.netlify.app/" title="Embedded Website" width="100%" height="500px"></iframe>
      <div className="card-body">
    <a className="btn btn-primary card-link" href="https://www.quotessharing.com/" target="_blank">Todo App Build with ReactJs</a>
  </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <iframe src="https://accoder11.github.io/simple-calculator/" title="Embedded Website" width="100%" height="500px"></iframe>
      <div className="card-body">
    <a className="btn btn-primary card-link" href="https://www.quotessharing.com/" target="_blank">Basic Calculator Build with Javascript</a>
  </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <iframe src="https://emcleto-todoapp.netlify.app/" title="Embedded Website" width="100%" height="500px"></iframe>
      <div className="card-body">
    <a className="btn btn-primary card-link" href="https://www.quotessharing.com/" target="_blank">KodeGo Capstone 1 Project Build with Javascript</a>
  </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <iframe src="https://accoder11.github.io/simple-calculator/" title="Embedded Website" width="100%" height="500px"></iframe>
      <div className="card-body">
    <a className="btn btn-primary card-link" href="https://www.quotessharing.com/" target="_blank">KodeGo Capstone 2 Project Build with API</a>
  </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <iframe src="https://accoder11.github.io/simple-calculator/" title="Embedded Website" width="100%" height="500px"></iframe>
      <div className="card-body">
    <a className="btn btn-primary card-link" href="https://www.quotessharing.com/" target="_blank">KodeGo Capstone 3 Project Build with ReactJs and Laravel</a>
  </div>
    </div>
  </div>
</div>
    </div>
    </div>
  )
}

export default Webdev;