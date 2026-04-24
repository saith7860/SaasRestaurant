import { z } from "zod";

export const userSchemaZod = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(50),

  email: z.email('Invalid email format'),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(100)
});
export const loginSchemaZod = z.object({
  email: z.email(),
  password: z.string().min(6)
});