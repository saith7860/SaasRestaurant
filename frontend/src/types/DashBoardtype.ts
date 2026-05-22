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
}

export interface DashboardData {
  restaurant: Restaurant | null;
  branches: BranchType[];
  categories: CategoryType[];
  items: ItemType[];
}