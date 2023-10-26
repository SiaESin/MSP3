const createCharge = async (token, price) => {
    const charge = await stripe.charges.create({
      amount: price,
      source: token.id,
      currency: "USD",
    });
  
    return charge;
  };
  
  import { db } from "./mongodb";
  
  const createOrder = async (charge, price) => {
    const order = {
      chargeId: charge.id,
      amount: price,
      status: "pending",
    };
  
    await db.collection("orders").add(order);
  
    return order;
  };