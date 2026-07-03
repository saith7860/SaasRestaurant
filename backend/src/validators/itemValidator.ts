import { Types } from "mongoose";
import { z } from "zod";

export const ItemSchema = z.object({
  name: z.string("Name is required").min(3,{message:'Item name should be more than 3 charachters'}),
  basePrice:z.string("Base Price is required"),
  description:z.string("Description is required").min(10,{message:'Description should be larger than 50 characters'}),
  branchId:z.string("branch Id is required"),
  restaurantId:z.string("Restaurant Id is required"),
  categoryId:z.string("category Id is required"),
  isAvailable:z.boolean().default(true),
  variants:z.array(z.string()).default([]),
  image:z.object({
    url:z.string('image url is required'),
    publicId:z.string('public Id is required'),
  }).optional()
});