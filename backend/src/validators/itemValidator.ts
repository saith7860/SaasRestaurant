import { z } from "zod";

const variantSchema = z.object({
  variation: z.string().min(1, "Variant name is required"),
  price: z.number().positive("Price must be positive"),
});

export const createItemSchema = z.object({
  name: z.string().min(3,{message:'Item name should be more than 3 charachters'}),
  image:z.string(),
  description:z.string().min(50,{message:'Description should be larger than 50 characters'}),
  variants: z.array(variantSchema)
});