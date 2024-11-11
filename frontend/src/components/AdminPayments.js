// src/AdminPayments.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPayments = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch payments data when component mounts
    axios
      .get('http://localhost:5000/allPayments')
      .then((response) => {
        setPayments(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Error fetching payments.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>All Payments</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Amount</th>
            <th>Currency</th>
            <th>Provider</th>
            <th>Account Info</th>
            <th>SWIFT Code</th>
            <th>Username</th>
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment._id}>
              <td>{payment._id}</td>
              <td>{payment.amount}</td>
              <td>{payment.currency}</td>
              <td>{payment.provider}</td>
              <td>{payment.accountInfo}</td>
              <td>{payment.swiftCode}</td>
              <td>{payment.username}</td>
              <td>{new Date(payment.createdAt).toLocaleString()}</td>
              <td>{new Date(payment.updatedAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPayments;
