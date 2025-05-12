import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (gem, grams) => {
    const itemExistente = cart.find(item => item.id === gem.id);
    if (itemExistente) {
      setCart(cart.map(item =>
        item.id === gem.id
          ? { ...item, grams: item.grams + grams }
          : item
      ));
    } else {
      setCart([...cart, { ...gem, grams }]);
    }
  };

  const removeFromCart = (gemId) => {
    setCart(cart.filter(item => item.id !== gemId));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
