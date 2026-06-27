import { z } from "zod";
import { ItemSchema } from "./itemValidator.js";

const createOrderSchema = z.object({
    deliveryAddress:z.string().min(5, "Delivery address is required"),
    subtotal:z.number("subtotal must be a number").nonnegative("Subtotal cannot be negative"),
    deliveryFee:z.number("delivery fee is required"),
    totalAmount: z.number("Total amount must be a number").nonnegative("Total amount cannot be negative"),
    paymentMethod: z.enum(["COD","CARD"], "Payment method must be COD or CARD"),
    restaurantId: z.string().min(1, "Restaurant ID is required"),
    branchId: z.string().min(1, "Branch ID is required"),
});

export { createOrderSchema };
