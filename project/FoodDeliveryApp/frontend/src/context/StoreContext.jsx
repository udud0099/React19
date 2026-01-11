import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(
     JSON.parse(localStorage.getItem("cartItems")) ||
    {}
  );
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems, setCartItems]);

  const addTocart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({
        ...prev,
        [itemId]: 1,
      }));
    } else {
      setCartItems((prev) => ({
        ...prev,
        [itemId]: prev[itemId] + 1,
      }));
    }
  };

  const removeFromCart = (itemId) => {
    if (cartItems[itemId] > 1) {
      setCartItems((prev) => ({
        ...prev,
        [itemId]: prev[itemId] - 1,
      }));
    } else {
      const updatedCart = { ...cartItems };
      delete updatedCart[itemId];
      setCartItems(updatedCart);
    }
  };

  useEffect(() => {
    console.log("Cart Items:", cartItems);
  }, [cartItems]);

  const contextValue = { food_list, cartItems, addTocart, removeFromCart };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
