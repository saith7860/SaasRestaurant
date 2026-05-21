import { Types } from "mongoose";
import { z } from "zod";

export const ItemSchema = z.object({
  name: z.string().min(3,{message:'Item name should be more than 3 charachters'}),
  image:z.string(),
  basePrice:z.number().nonnegative(),
  description:z.string().min(50,{message:'Description should be larger than 50 characters'}),

});