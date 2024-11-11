import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import paymentService from '../services/paymentService';

const Payment = () => {
  const [formData, setFormData] = useState({
    amount: '',
    currency: '',
    provider: 'SWIFT', // default to SWIFT
    accountInfo: '',
    swiftCode: '',
  });

  const navigate = useNavigate();
  const { amount, currency, provider, accountInfo, swiftCode } = formData;

  useEffect(() => {
    // Check if the user is logged in (username stored in localStorage)
    const username = localStorage.getItem('username');
    if (!username) {
      navigate('/login'); // Redirect to login if not logged in
    }
  }, [navigate]);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const username = localStorage.getItem('username'); // Get the stored username
      console.log('Payload:', { ...formData, username }); // Log the payload
      const response = await paymentService.makePayment({ ...formData, username });
      alert('Payment successful');
      navigate('/confirmation'); // Redirect to a confirmation page or wherever appropriate
    } catch (err) {
      console.error(err);
      if (err.response && err.response.data) {
        console.error('Error response data:', err.response.data);
        alert('Error: ' + err.response.data.msg);
      } else {
        alert('Error: ' + err.message);
      }
    }
  };

  return (
    <div className="payment-page">
      <h2>Make a Payment</h2>
      <p>Please provide the details for your payment:</p>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            value={amount}
            onChange={onChange}
            placeholder="Enter the amount"
            required
          />
        </div>
        <div className="form-group">
          <label>Currency</label>
          <input
            type="text"
            name="currency"
            value={currency}
            onChange={onChange}
            placeholder="Enter the currency (e.g., USD, EUR)"
            required
          />
        </div>
        <div className="form-group">
          <label>Provider</label>
          <input
            type="text"
            name="provider"
            value={provider}
            onChange={onChange}
            placeholder="Payment provider (e.g., SWIFT)"
            required
          />
        </div>
        <div className="form-group">
          <label>Account Information</label>
          <input
            type="text"
            name="accountInfo"
            value={accountInfo}
            onChange={onChange}
            placeholder="Account information"
            required
          />
        </div>
        <div className="form-group">
          <label>SWIFT Code</label>
          <input
            type="text"
            name="swiftCode"
            value={swiftCode}
            onChange={onChange}
            placeholder="Enter SWIFT Code"
            required
          />
        </div>
        <button type="submit" className="submit-btn">Pay Now</button>
      </form>
    </div>
  );
};

export default Payment;
