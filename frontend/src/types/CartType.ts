export type DealCartItem = {
  itemId: string;
  itemName: string;
  itemImage?: string;

  variants?: {
    id: string;
    variation: string;
    price: number;
  }[];
};

export type CartItem = {
  id: string;
  name: string;
  image?: string;

  variantId?: string;
  variation?: string;

  price: number;
  quantity: number;

  // New
  type?: "item" | "deal";
  dealId?: string;

  // Items included inside the deal
  dealItems?: DealCartItem[];
};