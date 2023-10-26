import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";

const Payments = ({ price }) => {
  const [stripeToken, setStripeToken] = useState(null);

  const handleToken = (token) => {
    setStripeToken(token);
  };

  return (
    <StripeCheckout
      stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
      token={handleToken}
      amount={price}
    >
      Pay
    </StripeCheckout>
  );
};

import Stripe from "stripe";

const stripe = new Stripe(process.env.REACT_APP_STRIPE_SECRET_KEY);

