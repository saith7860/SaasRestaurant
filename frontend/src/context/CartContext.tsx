import { createContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { CartItem } from "../types/CartType";

interface CartContextType {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  setCart: () => {},
});

interface CartProviderProps {
  children: ReactNode;
}

const getRestaurantSlug = () => {
  const hostname = window.location.hostname;

  // Example: al-hadi.localhost
  const parts = hostname.split(".");

  if (parts.length > 1 && parts[0] !== "localhost") {
    return parts[0];
  }

  return "default";
};

const getCartFromLocalStorage = (cartKey: string): CartItem[] => {
  try {
    const storedCart = localStorage.getItem(cartKey);

    if (!storedCart) {
      return [];
    }

    return JSON.parse(storedCart);
  } catch (error) {
    console.log("Error reading cart from localStorage", error);
    return [];
  }
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const restaurantSlug = getRestaurantSlug();

  const cartKey = useMemo(() => {
    return `cart_${restaurantSlug}`;
  }, [restaurantSlug]);

  const [cart, setCart] = useState<CartItem[]>(() =>
    getCartFromLocalStorage(cartKey)
  );

  useEffect(() => {
    localStorage.setItem(cartKey, JSON.stringify(cart));
  }, [cart, cartKey]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};