import React, { useContext, useEffect, useState } from "react";
import "./MusicSection.css";
import CardComponent from "./CardComponent";
import { Cart } from "./store/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate, redirect, useNavigate } from "react-router-dom";

const MusicSection = () => {
  const { products } = useContext(Cart);

  return (
    <>
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
    </>
  );
};

export default MusicSection;

export const loader = () => {
  const { isLoggedIn } = useContext(Cart);

  if (!isLoggedIn) {
    return redirect("/login");
  }

  return null;
};
