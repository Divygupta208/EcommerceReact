import React, { useContext, useEffect, useState } from "react";
import "./MusicSection.css";
import CardComponent from "./CardComponent";
import { Cart } from "./store/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MusicSection = () => {
  const { products } = useContext(Cart);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const notify = (text) => toast(text);

  useEffect(() => {
    const userLoggedIn = localStorage.getItem("user");

    if (userLoggedIn && !isLoggedIn) {
      setIsLoggedIn(true);
      notify("User Logged In");
    }
  }, [isLoggedIn]);

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
        <ToastContainer />
      </section>
    </>
  );
};

export default MusicSection;
