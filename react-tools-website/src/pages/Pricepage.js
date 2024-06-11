import React from 'react';
import './PricingPage.css';

import card from '../img/download.jpeg'; // Update the path to your card image
import paypal from '../img/images.jpeg'; // Update the path to your PayPal image
import AuthProvider from '../components/AuthContext';
import Navigation from '../components/Navbar';

const PricingPage = () => {
    return (
        <div>
            <AuthProvider>
    <Navigation/>
    </AuthProvider>
        
        <div className="pricing-page">
            <div className="left-panel">
                <img src={""} alt="PDF" className="logo" />
                <h1>Upgrade to Premium</h1>
                <div className="pricing-options">
                    <div className="option monthly">
                        <p>Monthly</p>
                        <h2>₹500</h2>
                    </div>
                    <div className="option yearly">
                        <p>Yearly</p>
                        <h2>₹2,400</h2>
                        <span>-60%</span>
                    </div>
                </div>
                <div className="payment-methods">
                    <img src={card} alt="Card" />
                    <img src={paypal} alt="PayPal" />
                </div>
                <div className="card-details">
                    <input type="text" placeholder="Card number" />
                    <input type="text" placeholder="MM / YY" />
                    <input type="text" placeholder="CVC" />
                </div>
                <button className="go-premium">Go Premium</button>
                <div className="guarantees">
                    <p><span>✔</span> Cancel anytime</p>
                    <p><span>✔</span> Money back guarantee</p>
                </div>
            </div>
            <div className="right-panel">
                <h2>Upgrade to Premium</h2>
                <ul>
                    <li><span>✔</span> Full access to PDF tools</li>
                    <li><span>✔</span> Unlimited document processing</li>
                    <li><span>✔</span> Work on Web, Mobile and Desktop</li>
                    <li><span>✔</span> Convert scanned PDF to Word with OCR, sign with digital signatures, convert to PDF/A</li>
                    <li><span>✔</span> No Ads</li>
                    <li><span>✔</span> Customer support</li>
                </ul>
            </div>
        </div>
        </div>
    );
};

export default PricingPage;
