// backend/routes/paymentRoutes.js
const express = require('express');
const { makePayment } = require('../controllers/paymentController');
const router = express.Router();

router.post('/makePayment', makePayment);

module.exports = router;
