import {z} from "zod";
//restaurant validator 
export const createRestaurantValidator = z.object({
  restaurantName: z.string("Enter Restaurnat Name").min(1, "Name is required"),
  description:z.string("Enter a description").min(10, "Description is required"),
  contactNumber: z.string().min(1, "Contact number is required"),
  slug:z.string("Enter a value").min(1, "Slug is required"),
  restaurantEmail:z.email("Invalid email"),
  deliveryFee:z.string("Enter number").min(1, "Delivery fee is required"),
  
})




