// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Payment from './components/Payment';
import AdminPayments from './components/AdminPayments';  // Import the AdminPayments component

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Welcome to My App</h1>
        <p>Please choose an option to proceed:</p>

        <div>
          <Link to="/register">
            <button>Go to Register</button>
          </Link>
          <Link to="/login">
            <button>Go to Login</button>
          </Link>
        </div>

        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/adminpayments" element={<AdminPayments />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
