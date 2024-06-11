import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="footer-section">
              <h3 className="footer-section__title">Demo PDF</h3>
              <ul className="footer-section__nav">
                <li><a href="/">Home</a></li>
                <li><a href="/">Features</a></li>
                <li><a href="/user-signup">Pricing</a></li>
                <li><a href="/">Tools</a></li>
                <li><a href="/">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="footer-section">
              <h3 className="footer-section__title">Product</h3>
              <ul className="footer-section__nav">
                <li><a href="/">Demo PDF Desktop</a></li>
                <li><a href="/">Demo PDF Mobile</a></li>
                <li><a href="/" target="_blank" rel="noopener">Developers</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="footer-section">
              <h3 className="footer-section__title">Solutions</h3>
              <ul className="footer-section__nav">
                <li><a href="/">Business</a></li>
                <li><a href="/">Education</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="footer-section">
              <h3 className="footer-section__title">Company</h3>
              <ul className="footer-section__nav">
                <li><a href="/">Our Story</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="/legal-data-privacy">Legal &amp; Privacy</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
     
        <div className="separator"></div>
        <div className="row">
          <div className="col-md-4">
            <div className="footer-section">
              <div className="footer-language">
                <span className="lang-current">
                  <i className="ico ico--world"></i>
                  <i className="ico ico--down"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-section">
              <div className="footer-info">
                <div className="footer-slogan">
                  <p>&copy; DEMOPDFPDF 2024 &reg; - Your PDF Editor</p>
                </div>
                <div className="footer-social">
                  <a className="social-item social-item--twitter" href="##" target="_blank" rel="noopener noreferrer" title="Follow us on Twitter!"></a>
                  <a className="social-item social-item--facebook" href="##" target="_blank" rel="noopener noreferrer" title="Like us on Facebook!"></a>
                  <a className="social-item social-item--linkedin" href="##" target="_blank" rel="noopener noreferrer" title="LinkedIn "></a>
                  <a className="social-item social-item--instagram" href="##" target="_blank" rel="noopener noreferrer" title="Instagram "></a>
                  <a className="social-item social-item--tiktok" href="##" target="_blank" rel="noopener noreferrer" title="TikTok "></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
