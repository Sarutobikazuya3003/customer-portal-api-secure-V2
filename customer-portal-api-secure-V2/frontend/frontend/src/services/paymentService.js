import axios from 'axios';

const makePayment = async (paymentData) => {
  try {
    const response = await axios.post('http://localhost:5000/payment/makePayment', paymentData);
    return response.data;  // Return the response data to the caller
  } catch (err) {
    throw err;  // Throw the error to be handled in the Payment component
  }
};

export default { makePayment };
