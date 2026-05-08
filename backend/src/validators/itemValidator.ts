import { z } from "zod";

const variantSchema = z.object({
  variation: z.string("variation name is required").min(1, "Variant name is required"),
  price: z.number("price is required").positive("Price must be positive"),
});

export const ItemSchema = z.object({
  name: z.string().min(3,{message:'Item name should be more than 3 charachters'}),
  image:z.string(),
  basePrice:z.number().nonnegative(),
  description:z.string().min(50,{message:'Description should be larger than 50 characters'}),
  variants: z.array(variantSchema)
});