// ForgotPassword.js
import React, { useState } from 'react';
import axios from 'axios';
import './ForgotPassword.css';
import Navigation from '../components/Navbar';
import Footer from '../components/Fotter';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showResetForm, setShowResetForm] = useState(false);
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/forgot-password', { email });
      setMessage(response.data.message);
      if (response.status === 200) {
        setShowResetForm(true);
      }
    } catch (error) {
      setMessage(error.response.data.message || 'An error occurred. Please try again.');
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/reset-password', { email, new_password: newPassword });
      setMessage(response.data.message);
      if (response.status === 200) {
        setShowResetForm(false);
      }
    } catch (error) {
      setMessage(error.response.data.message || 'An error occurred. Please try again.');
    }
  };

  return (
    <div>
        <Navigation/>
    
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      {!showResetForm ? (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <form onSubmit={handleResetPassword}>
          <input
            type="password"
            placeholder="Enter your new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <button type="submit">Reset Password</button>
        </form>
      )}
      {message && <p>{message}</p>}
    </div>
    <div>
        <Footer/>
    </div>
    </div>
  );
};

export default ForgotPassword;
