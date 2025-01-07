import React from 'react';

const Contact = () => {
  return (
    <div className="container text-center my-5">
      <h2 className='section-header'><span className="badge rounded-pill border"><img className="mx-1 rounded-circle" src="https://www.seekpng.com/png/full/130-1306317_clipart-resolution-12001200-contact-us-icon-transparent.png" alt="contact me logo" width="60px" height="60px"/>Contact</span></h2>
      
  <div className="row row-cols-4 rounded p-3 g-5 my-5">
  
    <div className="col-6 col-md-3">
    <a href="https://calendly.com/almacleto23/consultation" target="_blank" ><img className="img-fluid d-block w-10 rounded-pill"  src="https://cdn.mos.cms.futurecdn.net/W3yFiCjbmPia2u3qk9kKci.jpg" alt="calendly logo"/></a>
    </div>
    <div className="col-6 colcol-md-3">
    <a href="mailto:almacleto23@gmail.com"><img src="https://logowik.com/content/uploads/images/513_email.jpg" className="img-fluid d-block w-10 rounded-pill" width="250px" height="100px"/></a>
    </div>
    <div className="col-6 colcol-md-3">
    <a href="https://www.linkedin.com/in/alma-cleto-eyzy11/" target="_blank" ><img className="img-fluid d-block w-10" src="https://cdn.freebiesupply.com/logos/large/2x/linkedin-logo-png-transparent.png"/></a>
    </div>
    
  </div>
</div>
  );
};

export default Contact;
