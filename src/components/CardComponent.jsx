import React, { useContext } from "react";
import { Badge, Card } from "react-bootstrap";
import "./CardComponent.css";
import { Cart } from "./store/CartContext";

const CardComponent = ({ product }) => {
  const { addToCartHandler } = useContext(Cart);

  const addItemToCart = () => {
    addToCartHandler(product);
  };

  return (
    <Card border="light" style={{ width: "18rem" }} className="Card">
      <Card.Body className="card-body">
        <Card.Title className="text-center">{product.title}</Card.Title>
        <div className="card-img border border-dark-subtle">
          <img src={product.imageUrl} className="card-image" />
        </div>
        <div className="card-functions d-flex justify-content-between">
          <h6 className="mt-3 bg-dark-subtle px-4">${product.price}</h6>
          <button onClick={addItemToCart}>Add To Cart</button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
