import React from 'react';
import './SecurityPrivacy.css';
import Navigation from './Navbar';
import Footer from './Fotter';
import security from '../img/security.svg';
import privacy from '../img/privacy.svg';
import cookies from '../img/security.svg';
import payment from '../img/terms.svg';


const SecurityPrivacy = () => {
  return (
    <div>
      <Navigation />
      <div className='main'>
      <div className="headerlp">
        <h1>Data Security and Privacy Policies</h1>
      </div>

      <div className='legal legallp'>
        <h3> 
         Information Collection and Use
        </h3>
        <p> 1.
         We may collect personal identification information from Users in various ways, including, but not limited to, when Users visit our site, register on the site, place an order, subscribe to the newsletter, respond to a survey, fill out a form, and in connection with other activities, services, features, or resources we make available on our Site.
         </p>
        <p> 2. 
         This Legal & Privacy Policy governs the manner in which <span>DEMO PDF </span> collects, uses, maintains, and discloses information collected from users (each, a "User") of the <span>DEMOPDF.com </span> website ("Site"). This policy applies to the Site and all products and services offered by DEMO PDF.</p>
         
      </div>
      <div className="legal legallp">
        <h3>How We Use Collected Information</h3>
        <p>DEMO PDF may collect and use Users' personal information for the following purposes:</p>
      </div>
      <div className="content">
        <div className="card">
          <img src={security} alt="Security" />
          <h2>To improve customer service</h2>
          <p>Information you provide helps us respond to your customer service requests and support needs more efficiently.</p>
          <a href="#security">See more</a>
        </div>
        <div className="card">
          <img src={privacy} alt="Privacy" />
          <h2>To personalize user experience</h2>
          <p>Files you upload and process are encrypted and deleted from our servers within 2 hours, protecting your data and privacy.</p>
          <a href="#privacy">See more</a>
        </div>
        <div className="card">
          <img src={payment} alt="Terms" />
          <h2>To process payments</h2>
          <p>Here are the rules you must follow to get your work done in iLovePDF. By using iLovePDF, you agree to our Terms and Conditions.</p>
          <a href="#terms">See more</a>
        </div>
        <div className="card">
          <img src={cookies} alt="Cookies" />
          <h2>To run a promotion, contest, survey, or other Site feature</h2>
          <p>To send Users information they agreed to receive about topics we think will be of interest to them.</p>
          <a href="#cookies">See more</a>
        </div>
      </div>
      <div className="footerk">
        <h2>How We Protect Your Information</h2>
        <p>
        We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our Site.
        </p>
      
         <h2>
           Sharing Your Personal Information
         </h2>
         <p>
         We do not sell, trade, or rent Users
         </p>
       
      </div>
      </div>
     <div>
      <Footer/>
     </div>
    </div>
  );
};

export default SecurityPrivacy;
