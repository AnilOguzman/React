import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const emptyCart = () => {
    setCart([]);
  }
  const value = {
    cart,
    setCart,
    emptyCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
