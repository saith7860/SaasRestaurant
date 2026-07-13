import mongoose from "mongoose";
import { Theme } from "./Theme.js";
export interface CreateRestaurantBySuperAdminInput {
  restaurantName: string;
  description: string;
  slug: string;
  restaurantEmail: string;
  contactNumber: string;
  deliveryFee: number;
  owner:string|mongoose.Types.ObjectId
  name:string
  email:string
  password:string
  phone:string
  address:string
  role:string
  theme?:Theme
}