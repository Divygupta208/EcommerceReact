import React, { useContext } from "react";
import { Badge, Card } from "react-bootstrap";
import "./CardComponent.css";

const CardComponent = ({ product }) => {
  return (
    <Card border="light" style={{ width: "18rem" }} className="Card">
      <Card.Body className="card-body">
        <Card.Title className="text-center">{product.title}</Card.Title>
        <div className="card-img border border-dark-subtle">
          <img src={product.imageUrl} className="card-image" />
        </div>
        <div className="card-functions d-flex justify-content-between">
          <h6 className="mt-3 bg-dark-subtle px-4">${product.price}</h6>
          <button>Add To Cart</button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
