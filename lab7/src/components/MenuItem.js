import React from "react";

function MenuItem({ item, onAddToCart }) {
  return (
    <div>
      <img src={item.image} alt={item.name} style={{ width: "100px" }} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>${item.price}</p>
      <button onClick={() => onAddToCart(item)}>Add to Cart</button>
    </div>
  );
}

export default MenuItem;
