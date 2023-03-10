import React from 'react'
import Tools from '../components/Tools'

const Webdev = () => {
  return (
    <div className='container'>
      <div className='row my-3'>
        <div className='col-12 p-2'>
        <h2 className='section-header'><span className="badge rounded-pill border p-2"><img className="rounded-circle" src="https://www.seekpng.com/png/detail/492-4929420_web-development-clipart-logo-png-web-development-logo.png" alt="webdev logo" width="50px" height="60px"/>Web Development</span></h2>
        </div>
      </div>


        <div className="container">
        <Tools />
        <h2 className='section-header my-5'><span className="badge rounded-pill border">Web Dev Projects</span></h2>
        <div className="row row-cols-1 row-cols-md-2 g-3 bg-primary p-1 my-5 border rounded text-center">

        <div className="col">
    <div className="card h-100">
    <iframe src="https://group7project.vercel.app/html/index.html" title="Embedded Website" width="100%" height="500px"></iframe>
      <div className="card-body">
    <a className="btn btn-primary card-link" href="https://group7project.vercel.app/html/index.html" target="_blank">KodeGo Capstone 1 Project Build with Javascript</a>
  </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
    <iframe src="https://accoder11.github.io/simple-calculator/" title="Embedded Website" width="100%" height="500px"></iframe>
      <div className="card-body">
    <a className="btn btn-primary card-link" href="https://www.quotessharing.com/" target="_blank">KodeGo Capstone 2 Project Build with API</a>
  </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
    <iframe src="https://accoder11.github.io/simple-calculator/" title="Embedded Website" width="100%" height="500px"></iframe>
      <div className="card-body">
    <a className="btn btn-primary card-link" href="https://www.quotessharing.com/" target="_blank">KodeGo Capstone 3 Project Build with ReactJs and Laravel</a>
  </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
    <iframe src="https://www.quotessharing.com/" title="Embedded Website" width="100%" height="500px"></iframe>
      <div className="card-body">
    <a className="btn btn-primary card-link" href="https://www.quotessharing.com/" target="_blank">Website Build with WordPress</a>
  </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
    <iframe src="https://emcleto-todoapp.netlify.app/" title="Embedded Website" width="100%" height="500px"></iframe>
      <div className="card-body">
    <a className="btn btn-primary card-link" href="https://www.quotessharing.com/" target="_blank">Todo App Build with ReactJs</a>
  </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
    <iframe src="https://accoder11.github.io/simple-calculator/" title="Embedded Website" width="100%" height="500px"></iframe>
      <div className="card-body">
    <a className="btn btn-primary card-link" href="https://www.quotessharing.com/" target="_blank">Basic Calculator Build with Javascript</a>
  </div>
    </div>
  </div>
</div>
    </div>
    </div>
  )
}

export default Webdev;