export interface Restaurant {
  _id: string;
  name: string;
  image?: string;
  description?: string;
  contactNumber: string;
  email: string;
  deliveryFee: number;
  estimatedDeliveryTime?: string;
  isActive: boolean;
  slug: string;
  owner: string;
}

export interface Branch {
  _id: string;
  name: string;
  address: string;
  restaurantId: string;
  city:string;
  location:{
    lat:number;
    lng:number;
  };
  openingTime:string;
  closingTime:string;
}

export interface Category {
  _id: string;
  category: string;
  image?: string;
  restaurantId: string;
  branchId:string;
  items:Item[];
}

export interface variant {
  variation:string;
  price:number;
}
export interface Item {
  _id: string;
  name: string;
  description:string;
  image?: string;
  variants:variant[];
  resturantId: string;
  categoryId: string;
  branchId:string;
}

export interface DashboardData {
  restaurant: Restaurant | null;
  branches: Branch[];
  categories: Category[];
  items: Item[];
}