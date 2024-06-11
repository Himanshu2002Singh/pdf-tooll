import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import axios from 'axios';
import { useAuth } from '../components/AuthContext';
import background from '../img/logo.png';
import './Login.css';

const CreateAccount = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const response = await axios.post('http://localhost:5000/signup', { name, email, password });
      setMessage(response.data.message);
      login(name);  // Update auth state with the user name
      alert("Your account created successfully, welcome to Demo PDF");
      navigate('/'); 
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-form">
          <div className="login-logo">
            <img src="/path-to-logo/logo.svg" alt="DEMOPDF" />
          </div>
          <h2>Create new account</h2>
          <div className="social-login-buttons">
            <button className="facebook-btn"><FaFacebook /> Facebook</button>
            <button className="google-btn"><FaGoogle /> Google</button>
          </div>
          <form onSubmit={handleSignUp}>
            <div className="input-group">
              <input 
                type="text" 
                placeholder="Name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-group">
              <input 
                type="email" 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-group">
              <input 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="login-btn">Sign up</button>
          </form>
          {message && <p className="message">{message}</p>}
          <div className="login-link">
            <span>Already a member?</span> <a href="/user-login">Log in</a>
          </div>
          <div className="terms-policy">
            <p>By creating an account, you agree to <a href='/terms-conditions'>Terms of Service </a> and <a href='/legal-data-privacy'>Privacy </a>Policy</p>
          </div>
        </div>
      </div>
      <div className="login-right">
        <div className="image-section">
          <img src={background} alt="Workspace Illustration" />
        </div>
        <div className="workspace-info">
          <h2>Log in to your workspace</h2>
          <p>Enter your email and password to access your account. You are one step closer to boosting your document productivity.</p>
          <a href="/">See all tools</a>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
