import {z} from "zod";
//restaurant validator 
export const createRestaurantValidator = z.object({
  restaurantName: z.string().min(1, "Name is required"),
  restaurnatImage:z.url("Invalid image URL"),
  description:z.string().min(1, "Description is required"),
  contactNumber: z.string().min(1, "Contact number is required"),
  slug:z.string().min(1, "Slug is required"),
  restaurantEmail:z.email("Invalid email"),
  deliveryFee: z.string().min(1, "Delivery fee is required"),
  estimatedDeliveryTime:z.string().min(1, "Estimated delivery time is required"),
  owner: z.string().min(1, "Owner is required"),
});




