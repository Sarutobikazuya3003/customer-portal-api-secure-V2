// backend/controllers/paymentController.js
const Payment = require('../models/Payment');

exports.makePayment = async (req, res) => {
  console.log('Payment data received:', req.body); // Log the incoming data to check if all fields are present
  
  const { amount, currency, provider, accountInfo, swiftCode, username } = req.body;
  
  try {
    const newPayment = new Payment({
      amount,
      currency,
      provider,
      accountInfo,
      swiftCode,
      username,  // Ensure this is included in the payment model
    });

    await newPayment.save();
    res.status(201).json({ msg: 'Payment successful' });
  } catch (error) {
    console.error('Error saving payment:', error);
    res.status(500).json({ msg: 'Error making payment', error: error.message });
  }
};
