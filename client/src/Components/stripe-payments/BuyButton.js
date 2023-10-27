import * as React from 'react';
import { productLinks } from '../bookData';
import { useParams } from 'react-router';

function BuyButtonComponent() {

  const { index } = useParams();
	const selectedBook = parseInt(index);
	const paymentLink = productLinks[selectedBook]

  // Paste the stripe-buy-button snippet in your React component
  return (
  <div>
  <stripe-buy-button
    buy-button-id={paymentLink}
    publishable-key="pk_test_51O4tNdJNUdFsy0RxW2OOoCizqLfojhZ2hz23uR8n7ARHHoFMwBTevbQCB7AAzn2gj5Ky8Cr1REZQoqUmv05m86PF00xW4cGpzy">
  </stripe-buy-button>

{/* The Inheritance Games  */}
<stripe-buy-button
  buy-button-id="buy_btn_1O5e8iJNUdFsy0RxgeJcQcq1"
  publishable-key="pk_test_51O4tNdJNUdFsy0RxW2OOoCizqLfojhZ2hz23uR8n7ARHHoFMwBTevbQCB7AAzn2gj5Ky8Cr1REZQoqUmv05m86PF00xW4cGpzy">
</stripe-buy-button>

{/* Hawthorne Legacy */}
<stripe-buy-button
  buy-button-id="buy_btn_1O5e7UJNUdFsy0RxdMTRQVu7"
  publishable-key="pk_test_51O4tNdJNUdFsy0RxW2OOoCizqLfojhZ2hz23uR8n7ARHHoFMwBTevbQCB7AAzn2gj5Ky8Cr1REZQoqUmv05m86PF00xW4cGpzy">
</stripe-buy-button>

{/* The Final Gambit  */}
<stripe-buy-button
  buy-button-id="buy_btn_1O5djjJNUdFsy0RxwIictUzY"
  publishable-key="pk_test_51O4tNdJNUdFsy0RxW2OOoCizqLfojhZ2hz23uR8n7ARHHoFMwBTevbQCB7AAzn2gj5Ky8Cr1REZQoqUmv05m86PF00xW4cGpzy"
>
</stripe-buy-button>

{/* The Brothers Hawthorne  */}
<stripe-buy-button
  buy-button-id="buy_btn_1O5duPJNUdFsy0RxcId6BeLr"
  publishable-key="pk_live_51O4tNdJNUdFsy0RxFlyGv5xfD32NdCxk2gmAQtl9bwWMTc1uf8oDMEisucnVJ4OosRWzcEb6FDaIBgFQztZ6JkH800vix2hlXo"
>
</stripe-buy-button>

{/* Angels and Demons  */}
<stripe-buy-button
  buy-button-id="buy_btn_1O5e06JNUdFsy0RxfhpJusRR"
  publishable-key="pk_live_51O4tNdJNUdFsy0RxFlyGv5xfD32NdCxk2gmAQtl9bwWMTc1uf8oDMEisucnVJ4OosRWzcEb6FDaIBgFQztZ6JkH800vix2hlXo"
>
</stripe-buy-button>

{/* Moon Called */}
<stripe-buy-button
  buy-button-id="buy_btn_1O5e4PJNUdFsy0RxZKL3gNgR"
  publishable-key="pk_test_51O4tNdJNUdFsy0RxW2OOoCizqLfojhZ2hz23uR8n7ARHHoFMwBTevbQCB7AAzn2gj5Ky8Cr1REZQoqUmv05m86PF00xW4cGpzy"
>
</stripe-buy-button>

{/* Perks of Being a Wallflower  */}
<stripe-buy-button
  buy-button-id="buy_btn_1O5dk3JNUdFsy0RxrDoo9WIf"
  publishable-key="pk_test_51O4tNdJNUdFsy0RxW2OOoCizqLfojhZ2hz23uR8n7ARHHoFMwBTevbQCB7AAzn2gj5Ky8Cr1REZQoqUmv05m86PF00xW4cGpzy"
  >
</stripe-buy-button>


{/* Shelter  */}
<stripe-buy-button
  buy-button-id="buy_btn_1O5dxqJNUdFsy0RxsCEGDLOo"
  publishable-key="pk_live_51O4tNdJNUdFsy0RxFlyGv5xfD32NdCxk2gmAQtl9bwWMTc1uf8oDMEisucnVJ4OosRWzcEb6FDaIBgFQztZ6JkH800vix2hlXo"
>
</stripe-buy-button>


  </div>
  )
};




export default BuyButtonComponent;


// The Inheritance Games:

{/* <script async
  src="https://js.stripe.com/v3/buy-button.js">
</script> */}

// <stripe-buy-button
// >
// </stripe-buy-button>


// The Hawthorne Legacy:

// <script async
//   src="https://js.stripe.com/v3/buy-button.js">
// </script>

{/* <stripe-buy-button
  buy-button-id="buy_btn_1O5e7UJNUdFsy0RxdMTRQVu7"
  publishable-key="pk_test_51O4tNdJNUdFsy0RxW2OOoCizqLfojhZ2hz23uR8n7ARHHoFMwBTevbQCB7AAzn2gj5Ky8Cr1REZQoqUmv05m86PF00xW4cGpzy"
>
</stripe-buy-button> */}

// Moon Called: 

// <script async
//   src="https://js.stripe.com/v3/buy-button.js">
// </script>

{/* <stripe-buy-button
  buy-button-id="buy_btn_1O5e4PJNUdFsy0RxZKL3gNgR"
  publishable-key="pk_test_51O4tNdJNUdFsy0RxW2OOoCizqLfojhZ2hz23uR8n7ARHHoFMwBTevbQCB7AAzn2gj5Ky8Cr1REZQoqUmv05m86PF00xW4cGpzy"
>
</stripe-buy-button> */}


// Angels and Demons:

// <script async
//   src="https://js.stripe.com/v3/buy-button.js">
// </script>

{/* <stripe-buy-button
  buy-button-id="buy_btn_1O5e06JNUdFsy0RxfhpJusRR"
  publishable-key="pk_live_51O4tNdJNUdFsy0RxFlyGv5xfD32NdCxk2gmAQtl9bwWMTc1uf8oDMEisucnVJ4OosRWzcEb6FDaIBgFQztZ6JkH800vix2hlXo"
>
</stripe-buy-button> */}


// The final Gambit: 

// <script async
//   src="https://js.stripe.com/v3/buy-button.js">
// </script>

{/* <stripe-buy-button
  buy-button-id="buy_btn_1O5djjJNUdFsy0RxwIictUzY"
  publishable-key="pk_test_51O4tNdJNUdFsy0RxW2OOoCizqLfojhZ2hz23uR8n7ARHHoFMwBTevbQCB7AAzn2gj5Ky8Cr1REZQoqUmv05m86PF00xW4cGpzy"
>
</stripe-buy-button> */}


// Shelter: 

// <script async
//   src="https://js.stripe.com/v3/buy-button.js">
// </script>

{/* <stripe-buy-button
  buy-button-id="buy_btn_1O5dxqJNUdFsy0RxsCEGDLOo"
  publishable-key="pk_live_51O4tNdJNUdFsy0RxFlyGv5xfD32NdCxk2gmAQtl9bwWMTc1uf8oDMEisucnVJ4OosRWzcEb6FDaIBgFQztZ6JkH800vix2hlXo"
>
</stripe-buy-button> */}



// The Brothers Hawthorne:

// <script async
//   src="https://js.stripe.com/v3/buy-button.js">
// </script>

{/* <stripe-buy-button
  buy-button-id="buy_btn_1O5duPJNUdFsy0RxcId6BeLr"
  publishable-key="pk_live_51O4tNdJNUdFsy0RxFlyGv5xfD32NdCxk2gmAQtl9bwWMTc1uf8oDMEisucnVJ4OosRWzcEb6FDaIBgFQztZ6JkH800vix2hlXo"
>
</stripe-buy-button> */}


// The Perks of Being a Wallflower: 

// <script async
//   src="https://js.stripe.com/v3/buy-button.js">
// </script>

{/* <stripe-buy-button
  buy-button-id="buy_btn_1O5dk3JNUdFsy0RxrDoo9WIf"
  publishable-key="pk_test_51O4tNdJNUdFsy0RxW2OOoCizqLfojhZ2hz23uR8n7ARHHoFMwBTevbQCB7AAzn2gj5Ky8Cr1REZQoqUmv05m86PF00xW4cGpzy"
>
</stripe-buy-button> */}





// // import React, { useState } from "react";
// // import StripeCheckout from "react-stripe-checkout";

// // const Payments = ({ price }) => {
// //   const [stripeToken, setStripeToken] = useState(null);

// //   const handleToken = (token) => {
// //     setStripeToken(token);
// //   };

// //   return (
// //     <StripeCheckout
// //       stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
// //       token={handleToken}
// //       amount={price}
// //     >
// //       Pay
// //     </StripeCheckout>
// //   );
// // };

// // import Stripe from "stripe";

// // const stripe = new Stripe(process.env.REACT_APP_STRIPE_SECRET_KEY);
