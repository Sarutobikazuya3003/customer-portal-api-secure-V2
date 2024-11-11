const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const paymentRoutesa = require('./routes/paymentRoutesa');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const dbURI = process.env.MONGODB_URI;

// Connect to the database
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Register routes
app.use('/payment', paymentRoutes);
app.use('/allPayments', paymentRoutesa);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

// Attempt to set up SSL, but only if certificates are present
try {
  const sslOptions = {
    key: fs.readFileSync(path.join(__dirname, 'private-key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'certificate.pem'))
  };

  // Create an HTTPS server only if SSL certificates are found
  https.createServer(sslOptions, app).listen(PORT, () => {
    console.log(`Secure server running on port ${PORT}`);
  });
} catch (error) {
  console.log('SSL certificates not found or failed to load, running on HTTP');
  
  // Fallback to HTTP if SSL setup fails or is not needed
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
