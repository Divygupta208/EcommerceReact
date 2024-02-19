import React, { useContext, useEffect, useState } from "react";
import "./MusicSection.css";
import CardComponent from "./CardComponent";
import { Cart } from "./store/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MusicSection = () => {
  const { products, fetchCartData } = useContext(Cart);

  useEffect(() => {
    fetchCartData();
  }, []);

  return (
    <>
      <section className="card-section">
        <h3>Music</h3>

        <div className="card-div">
          {products.map((product) => (
            <div className="card-align">
              <CardComponent
                className="card"
                product={product}
                key={product.id}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default MusicSection;
