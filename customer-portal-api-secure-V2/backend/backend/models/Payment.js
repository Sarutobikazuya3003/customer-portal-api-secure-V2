// backend/models/Payment.js
const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  currency: { type: String, required: true },
  provider: { type: String, required: true },
  accountInfo: { type: String, required: true },
  swiftCode: { type: String, required: true },
  username: { type: String, required: true }, // Ensure username is included and marked as required
}, { timestamps: true });

module.exports = mongoose.model('Payment', PaymentSchema);
