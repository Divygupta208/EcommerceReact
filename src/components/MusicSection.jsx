import React, { useContext } from "react";
import "./MusicSection.css";
import CardComponent from "./CardComponent";
import { Cart } from "./store/CartContext";

const MusicSection = () => {
  const { products } = useContext(Cart);

  return (
    <section className="card-section">
      <h3>Music</h3>
      <div className="card-div">
        {products.map((product) => (
          <div className="card-align">
            <CardComponent className="card" product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MusicSection;
