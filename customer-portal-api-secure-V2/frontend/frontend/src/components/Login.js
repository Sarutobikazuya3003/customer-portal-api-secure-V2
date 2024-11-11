// frontend/src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import authService from '../services/authService';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;
  const navigate = useNavigate(); // Initialize the navigate function

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.login({ email, password });
      console.log(response);
      localStorage.setItem('user', JSON.stringify(response)); // Optionally store user data
      
      // Check if the email contains @apds.admin
      if (email.includes('@apds.admin')) {
        navigate('/adminpayments'); // Redirect to admin payments page if user is admin
      } else {
        navigate('/payment'); // Redirect to payment page after successful login
      }
    } catch (error) {
      console.error(error);
      // Handle any login errors here (e.g., show an alert or error message)
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={email} onChange={onChange} required />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" value={password} onChange={onChange} required />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
