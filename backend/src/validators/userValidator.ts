import { z } from "zod";

export const userSchemaZod = z.object({
  name: z.string().min(3, "Name must be at least 3 characters").max(50),

  email: z.email("Invalid email format"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(100),
  address: z
    .string()
    .min(10, "Address should me minimum 10 charachers long")
    .max(200),
  phone: z
    .string()
    .trim()
    .min(11,'Invalid phone number')
    .regex(/^(?:\+92|0)3\d{9}$/, "Invalid Pakistani phone number")
    .transform((val) => {
      if (val.startsWith("0")) {
        return "+92" + val.slice(1);
      }
      return val;
    }),
});
export const loginSchemaZod = z.object({
  email: z.email(),
  password: z.string().min(6, { message: "Password should be longer than 6" }),
});
