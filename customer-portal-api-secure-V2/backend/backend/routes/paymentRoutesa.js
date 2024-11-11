const express = require('express');
const router = express.Router();
const PaymentController = require('../controllers/paymentControllera');  // Adjust path if needed

// Define route for fetching all payments
router.get('/', PaymentController.getAllPayments);  // '/payment/allPayments' is handled here

module.exports = router;
