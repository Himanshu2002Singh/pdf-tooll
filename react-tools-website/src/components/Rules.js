import React from 'react'
import './SecurityPrivacy.css';
import Navigation from './Navbar';
import Footer from './Fotter';
import security from '../img/security.svg';
import privacy from '../img/privacy.svg';
import cookies from '../img/security.svg';
import payment from '../img/terms.svg';

function Rules() {
  return (
    <div>
    <Navigation />
    <div className='main'>
    <div className="headerlp">
      <h1>Terms & Conditions</h1>
      <p>
        Welcome to DEMO PDF!
      </p>
    </div>

    <div className='legal legallp'>
      
      <p> 1.
      These Terms and Conditions govern your use of <span>DEMO PDF</span>'s website, located at <span>DEMOPDF.com</span>, and any related services provided by us.
       </p>
      <p> 2. 
      By accessing or using DEMO PDF's website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these Terms and Conditions, you must not access or use <span>DEMO PDF's</span>  website.</p>
       
    </div>
    <div className="legal legallp">
      <h3>Interpretation and Definitions</h3>

      <p><span >Interpretation: </span>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
    
      <h3>Definitions: </h3>
      <p>For the purposes of these Terms and Conditions:</p>
   
    </div>
    <div className="content">
        
      <div className="card">
        <img src={security} alt="Security" />
        <h2>Company</h2>
        <p>(referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to [Your Company Name], [Your Company Address].</p>
        <a href="#security">See more</a>
      </div>
      <div className="card">
        <img src={privacy} alt="Privacy" />
        <h2>Website </h2>
        <p>refers to DEMO PDF, accessible from DEMOPDF.com </p>
        <a href="#privacy">See more</a>
      </div>
      <div className="card">
        <img src={payment} alt="Terms" />
        <h2>You </h2>
        <p>means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
        <a href="#terms">See more</a>
      </div>
      <div className="card">
        <img src={cookies} alt="Cookies" />
        <h2>To run a promotion, contest, survey, or other Site feature</h2>
        <p>To send Users information they agreed to receive about topics we think will be of interest to them.</p>
        <a href="#cookies">See more</a>
      </div>
    
   <div>
   <div className="legal legallp">
      <h3>Accounts</h3>

      <p><span >Account Creation: </span>You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password, whether your password is with our Service or a third-party service. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>
    
      <p> <span>Billing Information:</span>We reserve the right to suspend access to DEMO PDF's website temporarily for maintenance or other technical reasons, without notice.</p>
      
      <h3>Usage of Services</h3>

      <p><span >General Use:  </span>By using DEMO PDF's website, you agree not to distribute any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, sexually explicit, or otherwise objectionable.</p>
    
     
      <p><span>Service Interruptions:
        </span>We reserve the right to suspend access to DEMO PDF's website temporarily for maintenance or other technical reasons, without notice.
    </p>

    <h3>Intellectual Property</h3>

      <p><span >Copyright:  </span>All content on DEMO PDF's website, including but not limited to text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of the Company or its content suppliers and protected by international copyright laws.</p>
    
     <h3>Changes to These Terms and Conditions</h3>
      <p><span>Modification: </span>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
    </p>
    <p>
        <span>
            Access:
        </span> By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
    </p>
     
     <h3>
     Contact Us
     </h3>
     <p>
     If you have any questions about these Terms and Conditions, you can contact us at DEMOPDF@gmail.com.
     </p>
     
     

    </div>
    
    
    </div>
    </div>
    </div>
    <div>
    <Footer/>
   </div>
  </div>
  
  )
}

export default Rules