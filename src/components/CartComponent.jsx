import React, { useContext } from "react";
import "./CartComponent.css";
import { Cart } from "./store/CartContext";
import { Badge } from "react-bootstrap";
import CartProduct from "./CartProduct";
const CartComponent = (props) => {
  const { cart, setCart } = useContext(Cart);

  const removeItemHandler = (id) => {
    const index = cart.findIndex((c) => c.id === id);
    const updatedCart = [...cart];
    if (index !== -1) {
      if (updatedCart[index].quantity > 1) {
        updatedCart[index].quantity -= 1;
      } else {
        updatedCart.splice(index, 1);
      }

      setCart(updatedCart);
    }
  };

  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  return (
    <div className="cart d-block">
      <div className="d-flex justify-content-between">
        <h2 className="cart-heading">Cart</h2>
        <button className="bg-danger" onClick={props.setShowCart}>
          X
        </button>
      </div>
      <div className="cart-description row d-flex px-4 py-3">
        <span className="col-5">
          <h3>Item</h3>
        </span>
        <span className="col-3">
          <h3>Price</h3>
        </span>
        <span className="col">
          <h3>Quantity</h3>
        </span>
      </div>
      {cart.map((item) => (
        <CartProduct item={item} removeItemHandler={removeItemHandler} />
      ))}

      <div className="cart-price">${calculateTotalAmount().toFixed(2)}</div>
    </div>
  );
};

export default CartComponent;
