import React from 'react';

const Contact = () => {
  return (
    <div className="container text-center my-5">
      <h2 className='section-header'><span className="badge rounded-pill bg-primary border"><img className="m-3" src="https://us.123rf.com/450wm/veronawinner/veronawinner1807/veronawinner180700102/114960897-contact-icons-in-black-circles-in-flat-style-telephone-mail-mobile-phone-email-location-and-web.jpg?ver=6" alt="contact me logo" width="80px" height="70px"/>Contact</span></h2>
      
  <div className="row row-cols-4 rounded p-3 g-5 my-5">
  
    <div className="col-6 col-md-3 call-me">
    <a href="tel:09365270413">📞 Call Me Maybe😊</a>
    </div>
    <div className="col-6 col-md-3">
    <a href="mailto:almacleto23@gmail.com"><img src="https://www.vectorlogo.zone/logos/gmail/gmail-ar21.png" width="150px" height="100px"/></a>
    </div>
    <div className="col-6 col-md-3">
    <a href="https://www.linkedin.com/in/alma-cleto-eyzy11/"><img className="img-fluid d-block w-10" src="https://cdn.freebiesupply.com/logos/large/2x/linkedin-logo-png-transparent.png"/></a>
    </div>
    <div className="col-6 col-md-3">
    <a href="https://www.onlinejobs.ph/jobseekers/info/1239484"><img className="img-fluid d-block w-10"  src="https://offshoring.com.ph/wp-content/uploads/2019/01/onlinejobs-ph-e1546999751219.png" alt="onlinejobs logo"/></a>
    </div>
  </div>
</div>
  );
};

export default Contact;
