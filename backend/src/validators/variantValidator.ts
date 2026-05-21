import { z } from "zod";

const variantSchema = z.object({
  variation: z.string("variation name is required").min(1, "Variant name is required"),
  price: z.number("price is required").positive("Price must be positive"),
});
export default variantSchema;