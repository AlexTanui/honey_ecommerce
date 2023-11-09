import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Login.css';

function LoginForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const navigate = useNavigate(); // Initialize useNavigate

  const handleToggleForm = () => {
    setIsSignUp(!isSignUp);
    setErrorMessage('');
    // Reset form data when switching between login and signup
    setFormData({
      name: '',
      email: '',
      password: '',
    });
  };

  const handleSuccessfulLogin = () => {
    alert('Login successful!');
    setErrorMessage('');
    setIsLoggedIn(true); // Set the user as logged in
    // Navigate to the "cart" route upon successful login
    navigate('/cart');
  };

  const handleSubmit = async () => {
    if (isSignUp) {
      // User sign-up
      const response = await fetch('http://localhost/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.status === 200) {
        // Registration successful
        alert('Successful signup! Please log in.');
        setErrorMessage('');
        // Reset the form after successful signup
        setFormData({
          name: '',
          email: '',
          password: '',
        });
      } else {
        // Handle registration error
        const data = await response.json();
        setErrorMessage(data.message);
      }
    } else {
      // User login
      const response = await fetch('http://localhost:80/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.status === 200) {
        // Call the function to handle successful login
        handleSuccessfulLogin();
      } else {
        // Handle login error
        const data = await response.json();
        setErrorMessage(data.message);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <div id="login-signup" className={`cont ${isSignUp ? 's--signup' : ''}`}>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <div className="form sign-in">
          <h2>Welcome</h2>
          <label>
            <span>Email</span>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
          <label>
            <span>Password</span>
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
          </label>
          <p className="forgot-pass">Forgot password?</p>
          <button type="button" className="submit" onClick={handleSubmit}>
            Sign In
          </button>
          <h4 id="call_action">Don't have an account? Please Sign up!</h4>
        </div>
        <div className="sub-cont">
          <div className="img">
            <div className={`img__text ${isSignUp ? 'm--up' : 'm--in'}`}>
              <h3>
                {isSignUp
                  ? "Don't have an account? Please Sign up!"
                  : 'If you already have an account, just sign in.'}
              </h3>
            </div>
            <div className="img__btn" onClick={handleToggleForm}>
             <span className={`m--up ${isSignUp ? 'hidden' : ''}`}>Sign Up</span>
              <span className={`m--in ${isSignUp ? 'hidden' : ''}`}>Sign In</span>
            </div>
          </div>
          <div className="form sign-up">
            <h2>Create your Account</h2>
            <h4 id="call_action">If you already have an account, just sign in.</h4>
            <label>
              <span>Name</span>
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <label>
              <span>Password</span>
              <input type="password" name="password" value={formData.password} onChange={handleChange} />
            </label>
            <button type="button" className="submit" onClick={handleSubmit}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
