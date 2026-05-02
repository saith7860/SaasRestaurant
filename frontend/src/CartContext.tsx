import { createContext,useState,type ReactNode } from "react";
import type { JSX } from "react";
import type { CartItem,CartContextType } from "./types/CartType";

export const CartContext=createContext<CartContextType|null>(null);

export const CartProvider=({children}:{children:ReactNode}):JSX.Element=>{
    const [cart,setCart]=useState<CartItem[]>([]);
    return (
        
        <CartContext.Provider value={{cart,setCart}}>
           {children}
        </CartContext.Provider>
       
    )
}
