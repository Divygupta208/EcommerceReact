import React, { createContext, useState } from "react";

export const Cart = createContext();

const INITIAL_AVAILABLE = [
  {
    title: "Album 1",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Album 2",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Album 3",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Album 4",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const INITIAL_CART = [
  {
    id: Math.floor(Math.random() * 100),
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 2,
  },

  {
    id: Math.floor(Math.random() * 100),
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

    quantity: 3,
  },

  {
    id: Math.floor(Math.random() * 100),
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

    quantity: 1,
  },
];

const CartContext = ({ children }) => {
  const [products, setProducts] = useState(INITIAL_AVAILABLE);
  const [cart, setCart] = useState(INITIAL_CART);
  return (
    <Cart.Provider
      value={{
        products,
        setProducts,
        cart,
        setCart,
      }}
    >
      {children}
    </Cart.Provider>
  );
};

export default CartContext;
