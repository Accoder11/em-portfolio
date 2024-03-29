import React from 'react'
import Tools from '../components/Tools'
import students from '../assets/students.png'
import blog from '../assets/blog.png'

const Webdev = () => {
  return (
    <div className='container'>
      <div className='row my-3'>
        <div className='col-12 p-2'>
        <h2 className='section-header'><span className="badge rounded-pill border p-2"><img className="rounded-circle" src="https://www.seekpng.com/png/detail/492-4929420_web-development-clipart-logo-png-web-development-logo.png" alt="webdev logo" width="50px" height="60px"/>Web Development</span></h2>
        </div>
      </div>


        <div className='container bg-primary border rounded p-1 mb-5'>
        <Tools />
        </div>

        <div className='container border rounded p-3 bg-primary'>
        <h2 className='section-header mb-5'><span className="badge rounded-pill border">Web Dev Projects</span></h2>

        {/* webdev projects */}

        <div className="row row-cols-1 row-cols-md-2 border rounded text-center bg-light g-3 p-2">
    <div className="col">
    <div className="card h-100 embed-responsive embed-responsive-16by9">
    <iframe className="embed-responsive-item" src="https://group7project.vercel.app/html/index.html" title="Embedded Website" width="100%" height="500px"></iframe>
      <div className="card-body">
    <a className="btn btn-primary card-link" href="https://group7project.vercel.app/html/index.html" target="_blank">Capstone 1 Project Build with Javascript (KodeGo Bootcamp) </a>
  </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 embed-responsive embed-responsive-16by9">
    <iframe className="embed-responsive-item" src="https://capstone2-with-api-t4el.vercel.app/html/index.html" title="Embedded Website" width="100%" height="500px"></iframe>
      <div className="card-body">
    <a className="btn btn-primary card-link" href="https://capstone2-with-api-t4el.vercel.app/html/index.html" target="_blank">Capstone 2 Project JS with API (KodeGo Bootcamp)</a>
  </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 embed-responsive embed-responsive-16by9">
    <img src={blog} alt="simple PHP blog" className="h-100 d-block img-fluid w-100" />
      <div className="card-body">
    <a className="btn btn-primary card-link" href="http://group7.lovestoblog.com/" target="_blank">Simple PHP Blog Website Built with PHP, MySQL, and Bootstrap. (CRUD)</a>
  </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
    <img src={students} alt="students management system" className="h-100 d-block img-fluid w-100" />
      <div className="card-body">
    <a className="btn btn-primary card-link" href="http://phpcrud.epizy.com/index.php" target="_blank">Student Management System (PHP CRUD with MySQL Database)</a>
  </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 embed-responsive embed-responsive-16by9">
    <iframe className="embed-responsive-item" src="https://cletoaddtodo.netlify.app/" title="Embedded Website" width="100%" height="500px"></iframe>
      <div className="card-body">
    <a className="btn btn-primary card-link" href="https://cletoaddtodo.netlify.app/" target="_blank">ReactJs Mini-Project (Todo App) </a>
  </div>
    </div>
  </div>

  {/* <div className="col">
    <div className="card h-100 embed-responsive embed-responsive-16by9">
    <iframe className="embed-responsive-item" src="https://cleto-addtocart.netlify.app/" title="Embedded Website" width="100%" height="500px"></iframe>
      <div className="card-body">
    <a className="btn btn-primary card-link" href="https://cleto-addtocart.netlify.app/" target="_blank">ReactJs Mini-Project with Material UI(Add to Cart App) </a>
  </div>
    </div>
  </div> */}

  <div className="col">
    <div className="card h-100 embed-responsive embed-responsive-16by9">
    <iframe className="embed-responsive-item" src="https://simple-calculator-livid.vercel.app/" title="Embedded Website" width="100%" height="500px"></iframe>
      <div className="card-body">
    <a className="btn btn-primary card-link" href="https://simple-calculator-livid.vercel.app/" target="_blank">Basic Calculator Build with Javascript</a>
  </div>
    </div>
  </div>
</div>
    </div>
    </div>
  )
}

export default Webdev;
