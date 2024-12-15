import React from "react";

function Order({ cart }) {
  return (
    <div>
      <h2>Order Summary</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <p>Thank you for your order!</p>
    </div>
  );
}

export default Order;
