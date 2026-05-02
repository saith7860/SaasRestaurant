export type CartItem={
  itemId: string;
  name: string;
  image: string;
  variantId: string;
  variation: string;
  price: number;
  quantity: number;
}   //type of one cart item
export type CartContextType ={
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}