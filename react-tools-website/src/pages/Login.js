import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import axios from 'axios';
import { useAuth } from '../components/AuthContext';
import background from '../img/logo.png';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      console.log("hlw ji",response.Data.name);
      const p= response.data.name;

      console.log(p);
      login(p);  // Update auth state with the user name
      alert("Login successful, welcome back!");
      
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
          <h2>Log in to your account</h2>
          <div className="social-login-buttons">
            <button className="facebook-btn"><FaFacebook /> Facebook</button>
            <button className="google-btn"><FaGoogle /> Google</button>
          </div>
          <form onSubmit={handleLogin}>
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
            <button type="submit" className="login-btn">Log in</button>
          </form>
          {message && <p className="message">{message}</p>}
          <div className="login-link">
            <span>New user?</span> <a href="/user-signup">Create an account</a>
          </div>
        </div>
      </div>
      <div className="login-right">
        <div className="image-section">
          <img src={background} alt="Workspace Illustration" />
        </div>
        <div className="workspace-info">
          <h2>Access your workspace</h2>
          <p>Enter your email and password to access your account. You are one step closer to boosting your document productivity.</p>
          <a href="/">See all tools</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
