const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  amount: Number,
  currency: String,
  provider: String,
  accountInfo: String,
  swiftCode: String,
  username: String
}, { timestamps: true });

const Payment = mongoose.models.Payment || mongoose.model('Paymenta', paymentSchema);

module.exports = Payment;
