import React from 'react';
import Contactform from '../components/Contactform';

const Contact = () => {
  return (
    <div className='my-5'>
      <div className="container">
        <h2 className='section-header'><span className="badge rounded-pill bg-primary"><img className="m-3" src="https://cdn.vectorstock.com/i/preview-1x/58/95/contact-us-icon-set-line-art-style-vector-38625895.jpg" alt="contact me logo" width="100px" height="100px"/>Contact</span></h2>
        <div className="row bg-primary p-3">
          <div className="col-sm-6 mb-3 mb-sm-0 text-center">
            <div className="card" style={{ width: '25rem'}}>
              <div className="card-body">
                <div>
                  <h2 className="card-header mb-3">
                    Let's Talk
                  </h2>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item call-me"><a href="tel:09365270413">📞 Call Me Now</a></li>
                    {/* <li className="list-group-item"><a href="mailto:almacleto23@gmail.com"><img src="https://www.vectorlogo.zone/logos/gmail/gmail-ar21.png" width="150px" height="100px"/></a></li> */}
                    <li className="list-group-item"><a href="https://www.linkedin.com/in/alma-cleto-eyzy11/"><img className="img-fluid d-block w-55" src="https://logos-download.com/wp-content/uploads/2016/03/LinkedIn_Logo_2019.png"/></a></li>
                    <li className="list-group-item"><a href="https://www.onlinejobs.ph/jobseekers/info/1239484"><img className="img-fluid d-block w-55"  src="https://michaellamb.online/wp-content/uploads/2021/05/Onlinejobsph-NoypiGeeks.jpg" alt="onlinejobs logo"/></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right side form */}
        <div className="col-sm-6">
          <Contactform />
        </div>
        </div>
        </div>
      </div>
  );
};

export default Contact;
