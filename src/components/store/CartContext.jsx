import React, { createContext, useState } from "react";

export const Cart = createContext();

const INITIAL_AVAILABLE = [
  {
    id: Math.floor(Math.random() * 100),
    title: "Album 1",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: Math.floor(Math.random() * 100),
    title: "Album 2",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id: Math.floor(Math.random() * 100),
    title: "Album 3",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id: Math.floor(Math.random() * 100),
    title: "Album 4",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const INITIAL_CART = [];

const CartContext = ({ children }) => {
  const [products, setProducts] = useState(INITIAL_AVAILABLE);
  const [cart, setCart] = useState(INITIAL_CART);

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

  return (
    <Cart.Provider
      value={{
        products,
        setProducts,
        cart,
        setCart,
        addToCartHandler,
      }}
    >
      {children}
    </Cart.Provider>
  );
};

export default CartContext;
