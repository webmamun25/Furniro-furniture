

import {
  PaymentElement,
  useStripe,
  useElements,
  CardElement,
} from '@stripe/react-stripe-js';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProviders';

const CheckoutForm = () => {
  const [error,setError]=useState('')
  const[clientSecret,setClientsecret]=useState('')
  
  const stripe = useStripe();
  const elements = useElements();
  const {user,loading}=useContext(AuthContext)
  console.log(user?.email)
  const price=100
  useEffect(()=>{
    
 
      fetch("https://furniture-server-ecru.vercel.app/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ price:price }),
      })
      .then(res=>res.json())
      .then(data=>setClientsecret(data?.clientSecret))



  },[])
 

  
    
  


  

  const handleSubmit = async (event) => {
    // Block native form submission.
      // Block native form submission.
      event.preventDefault();
      console.log("clicked")

      if (!stripe || !elements) {
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        return;
      }
  
      // Get a reference to a mounted CardElement. Elements knows how
      // to find your CardElement because there can only ever be one of
      // each type of element.
      const card = elements.getElement(CardElement);
  
      if (card == null) {
        return;
      }
  
      // Use your card Element with other Stripe.js APIs
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        console.log('[error]', error);
        setError(error.code)
      } else {
        console.log('[PaymentMethod]', paymentMethod);
        setError('')
      }

      const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: user?.displayName,
              email: user?.email,
            },
          },
        },
      );

        if(confirmError){
          console.log("error occured",confirmError)
        }
        else{
          console.log("paymentintent",paymentIntent)
          const payment={
            email:user.email,
            price:price,
            
          }
        }
    };
  
  return (
    <form onSubmit={handleSubmit}>
    <CardElement
      options={{
        style: {
          base: {
            fontSize: '16px',
            color: '#424770',
            '::placeholder': {
              color: '#aab7c4',
            },
          },
          invalid: {
            color: '#9e2146',
          },
        },
      }}
    />
    <button className='text-primary' type="submit" disabled={!stripe || !clientSecret}>
      Pay
    </button>
    <p className='text-red-600'>{error}</p>
  </form>
  )
}

export default CheckoutForm