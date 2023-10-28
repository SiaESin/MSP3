import * as React from 'react';
import { productLinks, keyLinks } from '../bookData';
import { useParams } from 'react-router';

function BuyButtonComponent() {

  const { index } = useParams();
	const selectedBook = parseInt(index);
	const paymentLink = productLinks[selectedBook]
  const key = keyLinks[selectedBook]

  // Paste the stripe-buy-button snippet in your React component
  return (
  <div>
    <stripe-buy-button
      buy-button-id={paymentLink}
      publishable-key="pk_test_51O4tNdJNUdFsy0RxW2OOoCizqLfojhZ2hz23uR8n7ARHHoFMwBTevbQCB7AAzn2gj5Ky8Cr1REZQoqUmv05m86PF00xW4cGpzy">
    </stripe-buy-button>
  </div>
  )
};

export default BuyButtonComponent;
