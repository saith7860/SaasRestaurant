import { Types } from "mongoose";
import { z } from "zod";

export const ItemSchema = z.object({
  name: z.string().min(3,{message:'Item name should be more than 3 charachters'}),
  image:z.string(),
  basePrice:z.number().nonnegative(),
  description:z.string().min(10,{message:'Description should be larger than 50 characters'}),
  branchId:z.string("branch Id is required"),
  restaurantId:z.string("Restaurant Id is required"),
  categoryId:z.string("category Id is required"),
  isAvailable:z.boolean().default(true),
  variants:z.array(z.string()).default([]),
  
});