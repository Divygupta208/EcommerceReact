import React, { useContext, useRef } from "react";
import "./ContactMain.css";
import { Cart } from "./store/CartContext";
const ContactMain = () => {
  const { contactHandler } = useContext(Cart);
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const addToContact = (event) => {
    event.preventDefault();
    const userObj = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone_no: phoneRef.current.value,
    };

    contactHandler(userObj);
  };

  return (
    <div className="contact-main" onSubmit={addToContact}>
      <form className="contact-form">
        <input type="text" id="username" placeholder="name" ref={nameRef} />
        <input type="text" id="email" placeholder="Email" ref={emailRef} />
        <input type="text" id="phone" placeholder="Contact" ref={phoneRef} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactMain;
