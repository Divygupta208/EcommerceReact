import React, { useContext, useRef } from "react";
import "./LoginPage.css";
import { Cart } from "./store/CartContext";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { handleLogin } = useContext(Cart);
  const navigate = useNavigate();
  const token = localStorage.getItem("user");
  const notify = (text) => toast(text);
  const loggedIn = !!token;

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBQB6v7juLB1ZeieXByybdGUu0tfcnknbs",
        {
          method: "POST",
          body: JSON.stringify({
            email: emailRef.current.value,
            password: passwordRef.current.value,
            returnSecureToken: true,
          }),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.ok) {
        const data = await response.json();

        handleLogin(data.idToken);
        navigate("/store");
      } else {
        const data = await response.json();
        notify(data.error.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="login-main">
      <ToastContainer />
      {loggedIn && (
        <div>
          <h3>user logged in</h3>
        </div>
      )}
      {!loggedIn && (
        <form className="login-form" onSubmit={submitHandler}>
          <input type="text" id="email" placeholder="Email" ref={emailRef} />
          <input
            type="password"
            id="password"
            placeholder="Password"
            ref={passwordRef}
          />
          <button type="submit">Log In</button>
        </form>
      )}
    </div>
  );
};

export default LoginPage;
