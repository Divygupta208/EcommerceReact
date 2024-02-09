import React from "react";
import "./CartComponent.css";

const CartProduct = ({ item, removeItemHandler }) => {
  const removeFromCart = (event) => {
    removeItemHandler(item.id);
  };

  return (
    <div
      className="cart-items row d-flex gap-3 justify-content-between py-2"
      key={item.id}
    >
      <span className="d-flex gap-3 col-5 align-items-center image-section">
        <img src={item.imageUrl} className="cart-image" />
        <h6>{item.title}</h6>
      </span>
      <span className="price-section col-3">${item.price}</span>
      <span className="col">
        <h6>
          <input
            type="text"
            className="input text-align-center"
            value={item.quantity}
          />
        </h6>
        <button onClick={removeFromCart}>Remove</button>
      </span>
    </div>
  );
};

export default CartProduct;
