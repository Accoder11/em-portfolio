import React from 'react'
import excel from '../assets/excel.png'
import msexcel from '../assets/msexcel.png'
import googlesheets from '../assets/googlesheets.png'

function Excel() {
  return (
    <div>
        <div className='container'>
        <h3 className='my-5 section-header'><span className="badge rounded-pill bg-primary"><img className="m-3" src={excel} alt="ms excel logo" width="70px" height="70px"/>Google Sheets / MS Excel</span></h3>
        <div className="row row-cols-1 row-cols-md-3 g-4 bg-primary p-3 text-center">
  <div className="col">
    <div className="card">
      <img src={msexcel} className="card-img-top" alt="ms excel logo" />
      <div className="card-body">
    <a href="https://docs.google.com/spreadsheets/d/1ivfmIBtSDRp-7PZTCeDLtgIhaCZhKDBe/edit?rtpof=true&sd=true" className="btn btn-primary card-link">MS Excel Formula ​Training</a>
    </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <img src={googlesheets} className="card-img-top" alt="google sheet logo" />
      <div className="card-body">
    <a href="https://docs.google.com/spreadsheets/d/1JXOy3VvtqukMQoh6WyfwJC7klzCTTYW7HuSNTUE8q9o/edit#gid=0" className="btn btn-primary card-link">Product Search Training</a>
    </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <img src={googlesheets} className="card-img-top" alt="google sheet logo" />
      <div className="card-body">
    <a href="https://docs.google.com/spreadsheets/d/1o171LP06tGLfXNx2Y4jH1h1V7nlwt-jrVbh0-6tc4Mw/edit#gid=0" className="btn btn-primary card-link">Lead Generation Training</a>
    </div>
    </div>
  </div>
</div>
    </div>
    </div>
  )
}

export default Excel;