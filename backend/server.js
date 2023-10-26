
// This is your test secret API key.
const stripe = require('stripe')('sk_test_51O4tNdJNUdFsy0Rx7gMHNxuVZqa7qCqpQk6lGEF7TVSjCzjHA66B9PUXQyctx9pbnF9vlbSV5X5CdoUH2ARA3P7A00XQV3ab5y');
const express = require('express');
const app = express();
var cors = require ('cors');
app.use(cors());
app.use(express.static)('public');
app.use(express.json());

const YOUR_DOMAIN = 'http://localhost:3001';

app.post('/checkout', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: '{{pr_8.24}}',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${'http://localhost:3001/Success'}?success=true`,
    cancel_url: `${'http://localhost:3001/cancelCart'}?canceled=true`,
  });

  res.redirect(303, session.url);
});

app.listen(3001, () => console.log('Listening on port 3001'));