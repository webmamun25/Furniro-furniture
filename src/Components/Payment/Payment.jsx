//stripe installation 

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const stripePromise = loadStripe(`pk_test_51PRdaOGc9mjn13pTGBKbuoX0wyWyegdse4stWpx3bRzIs6CUVaMTMvM0jI2JqeUvvmVsvmL8Cle3LNS08bXJU2Za00IjWuWCHg`);
  return (
    <div>
 <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
    </div>
  )
}

export default Payment