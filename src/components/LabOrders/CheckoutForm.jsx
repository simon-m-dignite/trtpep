import React from 'react'
import {
    Elements,
    CardElement,
    useStripe,
    useElements,
    PaymentElement,
  } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
    const stripe = useStripe();
  const elements = useElements();
  return (
    <PaymentElement />

  )
}

export default CheckoutForm
