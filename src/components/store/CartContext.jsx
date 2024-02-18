import React, { createContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const Cart = createContext();

const INITIAL_AVAILABLE = [
  {
    id: 1,
    title: "Galaxy",

    price: 1000,
    ratings: 4.5,
    imageUrl: [
      "https://m.media-amazon.com/images/I/818VqDSKpCL._SX569_.jpg",
      "https://m.media-amazon.com/images/I/8155EFAxDzL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71td5npKu6L._SY741_.jpg",
      "https://m.media-amazon.com/images/I/71e4JV8PTsL._SY741_.jpg",
    ],
    reviews: [{ text: "Great product!", user: "User1", date: "2022-02-14" }],
  },

  {
    id: 2,
    title: "iPhone",
    ratings: 4,
    price: 50,

    imageUrl: [
      "https://m.media-amazon.com/images/I/81fxjeu8fdL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/51brdXeugJL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/712CBkmhLhL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/617JW0DrG8L._SX679_.jpg",
    ],
    reviews: [{ text: "Great product!", user: "User1", date: "2022-02-14" }],
  },

  {
    id: 3,
    title: "One+",

    price: 70,
    ratings: 3.5,
    imageUrl: [
      "https://m.media-amazon.com/images/I/717JX3femML._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61nlAS5+y4L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61dXJigjlJL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61I7YQ4fk4L._SX679_.jpg",
    ],
    reviews: [{ text: "Great product!", user: "User1", date: "2022-02-14" }],
  },

  {
    id: 4,
    title: "RealME-Narzo",

    price: 100,
    ratings: 4.2,
    imageUrl: [
      "https://m.media-amazon.com/images/I/61fd1yUJ6kL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71tyRMAtVrL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71sdimiMYKL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71gOZ0lcZsL._SX679_.jpg",
    ],
    reviews: [{ text: "Great product!", user: "User1", date: "2022-02-14" }],
  },
];

const INITIAL_CART = [];

const CartContext = ({ children }) => {
  const [products, setProducts] = useState(INITIAL_AVAILABLE);
  const [cart, setCart] = useState(INITIAL_CART);
  const initialToken = localStorage.getItem("user");
  const [token, setToken] = useState(initialToken);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [count, setCount] = useState(1);
  const userLoggedIn = !!token;

  const handleLogin = (token) => {
    setToken(token);
    setIsLoggedIn(userLoggedIn);
    console.log(isLoggedIn);
    localStorage.setItem("user", token);
  };

  const addToCartHandler = (item) => {
    const index = cart.findIndex((p) => p.id === item.id);

    if (index !== -1) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const contactHandler = async (info) => {
    try {
      const response = await fetch(
        "https://react-http-7951f-default-rtdb.firebaseio.com/users.json",
        {
          method: "POST",
          body: JSON.stringify(info),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error(`Cannot Send Data . ${response.status}`);
      }

      const data = response.json();

      console.log(data);
    } catch (error) {
      console.error("Error adding data", error.message);
    }
  };

  return (
    <Cart.Provider
      value={{
        products,
        setProducts,
        cart,
        setCart,
        addToCartHandler,
        contactHandler,
        token,
        handleLogin,
        isLoggedIn,
        count,
        setCount,
      }}
    >
      {children}
    </Cart.Provider>
  );
};

export default CartContext;
