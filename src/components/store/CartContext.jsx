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

const CartContext = ({ children }) => {
  const [products, setProducts] = useState(INITIAL_AVAILABLE);

  return (
    <Cart.Provider
      value={{
        products,
        setProducts,
      }}
    >
      {children}
    </Cart.Provider>
  );
};

export default CartContext;
