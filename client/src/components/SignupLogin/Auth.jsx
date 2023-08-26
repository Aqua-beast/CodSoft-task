import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Auth.css'; // Create a CSS file for styling

const Auth = () => {
  const Navigate = useNavigate();
  const [activeForm, setActiveForm] = useState('signup');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
  };

  const handleAuth = async() => {
    try {
      const response = await axios.post(
        `https://cod-soft-task.vercel.app/${activeForm}`,
        formData
      );
      console.log('Response:', response.data);
      if(activeForm === 'signup'){
        console.log('signup');
        setActiveForm('login');
      }
      localStorage.setItem('token', response.data.token);
      console.log(token);
      // Handle successful response, e.g., redirect to dashboard
      if(activeForm === 'login'){
        Navigate('/home')
      }
    } catch (error) {
      console.error('Error:', error.response.data);
      // Handle error, e.g., show error message
    }
  }

  return (
    <div className="auth-container">
      <div
        className={`auth-form ${activeForm === 'signup' ? 'signup' : 'login'}`}
      >
        <h2>{activeForm === 'signup' ? 'Sign Up' : 'Login'}</h2>
        <form onSubmit={handleSubmit}>
          {activeForm === 'signup' && (
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <button onClick={()=>handleAuth()} type="submit">
            {activeForm === 'signup' ? 'Sign Up' : 'Login'}
          </button>
        </form>
        <p onClick={() => setActiveForm(activeForm === 'signup' ? 'login' : 'signup')}>
          {activeForm === 'signup'
            ? 'Already have an account? Login here.'
            : 'Don\'t have an account? Sign up here.'}
        </p>
      </div>
    </div>
  );
};

export default Auth;
