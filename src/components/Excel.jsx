import React from 'react';
import excel from '../assets/excel.png';
import googlesheets from '../assets/googlesheets.png';

const Excel = () => {
  return (
    <div className="container">
      <div className='row my-3'>
        <div className='col-12 p-2'>
      <h2 className='section-header'><span className="badge rounded-pill border p-2"><img className="rounded-circle" src={excel} alt="ms excel logo" width="50px" height="50px"/>Excel/Spreadsheets</span></h2>
      </div>
      </div>


      <div className="row row-cols-1 row-cols-md-3 g-4 bg-primary p-2 text-center my-5 border rounded">
        <div className="col">
          <div className="card h-100">
            <img src="https://www.cpapracticeadvisor.com/wp-content/uploads/sites/2/2022/07/29755/logo_excel_1_.5ae211c69b6ca.png" className="card-img-top" alt="ms excel logo" />
            <div className="card-body">
              <a href="https://docs.google.com/spreadsheets/d/1ivfmIBtSDRp-7PZTCeDLtgIhaCZhKDBe/edit?rtpof=true&sd=true" target="_blank" rel="noreferrer" className="btn btn-primary card-link">MS Excel Formula ​Training</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={googlesheets} className="card-img-top" alt="google sheet logo" />
            <div className="card-body">
              <a href="https://docs.google.com/spreadsheets/d/1JXOy3VvtqukMQoh6WyfwJC7klzCTTYW7HuSNTUE8q9o/edit#gid=0" target="_blank" rel="noreferrer" className="btn btn-primary card-link">Product Search Training</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={googlesheets} className="card-img-top" alt="google sheet logo" />
            <div className="card-body">
              <a href="https://docs.google.com/spreadsheets/d/1o171LP06tGLfXNx2Y4jH1h1V7nlwt-jrVbh0-6tc4Mw/edit#gid=0" target="_blank" rel="noreferrer" className="btn btn-primary card-link">Lead Generation Training</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Excel;
