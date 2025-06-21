import { useState } from 'react';

import PropTypes from 'prop-types';

import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import Button from 'react-bootstrap/Button';

const Payment = ({ onPaymentSuccess, total }) => {
  
  // Prop types validation
  Payment.propTypes = {
    onPaymentSuccess: PropTypes.func.isRequired,
    total: PropTypes.number.isRequired,
  };

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    if (!stripe || !elements) {
      // Make sure stripe and elements are loaded
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Retrieve the authorization token (assuming it's stored in local storage)
      const token = localStorage.getItem('authToken'); // Adjust this line based on your token storage method

      // Call your backend to create a PaymentIntent and get the client secret
      const response = await fetch('http://localhost:4000/create-payment-intent', {



        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Include the token here
        },
        body: JSON.stringify({ amount: total * 100 }), // Convert total to cents
      });

      const { clientSecret } = await response.json();

      // Confirm the payment with the card details entered
      const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (stripeError) {
        setError(stripeError.message);
      } else if (paymentIntent.status === 'succeeded') {
        onPaymentSuccess(); // Call onPaymentSuccess when payment is successful
      }
    } catch (error) {
      console.error(error); // Log the error for debugging

      setError('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-100'>
      <CardElement className='w-100' />
      {error && <p>{error}</p>}
      <Button className='mt-5 w-100'
        variant="primary"
        onClick={handlePayment}
        disabled={loading || !stripe || !elements}
      >
        {loading ? 'Processing...' : `Pay $${total}`}
      </Button>
    </div>
  );
};

export default Payment;
