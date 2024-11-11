const Payment = require('../models/Paymenta'); // Adjust path if needed

// Controller to get all payments
const getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find();  // Retrieve all payments from DB
    res.json(payments);
  } catch (error) {
    console.error('Error fetching payments:', error);
    res.status(500).json({ message: 'Error fetching payments' });
  }
};

module.exports = { getAllPayments };
