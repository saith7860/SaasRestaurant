export interface Restaurant {
  _id: string;
  restaurantName: string;
  image?: string;
  description?: string;
  contactNumber: string;
  restaurantEmail: string;
  deliveryFee: number;
  estimatedDeliveryTime?: string;
  isActive: boolean;
  slug: string;
  owner: string;
}

export interface BranchType {
  _id: string;
  name: string;
  address: string;
  restaurantId: string;
  city:string;
  contactNumber:string;
  openingTime:string;
  closingTime:string;
  deliveryFee:number;
  isOpen:boolean;
}

export interface CategoryType {
  _id: string;
  category: string;
  image?: string;
  restaurantId: string;
  branchId:string;
  items:ItemType[];
}

export interface variantType  {
  _id: string;
  itemId: string;
  variation:string;
  price:number;
}
export interface ItemType {
  _id: string;
  name: string;
  description:string;
  image?: string;
  variants?:variantType[];
  resturantId: string;
  categoryId: string;
  branchId:string;
  basePrice:number;
}
export interface OrderType{
  _id:string;
  restaurantId:string;
  branchId:string;
  deliveryAddress:string;
  subtotal:number;
  deliveryFee:number;
  totalAmount:number;
  paymentMethod:string;
  paymentStatus:string;
  orderStatus:string;
  userId: {
    name: string;
    phone: string;
  };
}

export interface DashboardData {
  restaurant: Restaurant | null;
  branches: BranchType[];
  categories: CategoryType[];
  items: ItemType[];
}