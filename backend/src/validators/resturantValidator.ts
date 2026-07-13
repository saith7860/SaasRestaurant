import {z} from "zod";
//restaurant validator 
export const updateRestaurantValidator = z.object({
  restaurantName: z.string("Enter Restaurnat Name").min(1, "Name is required"),
  description:z.string("Enter a description").min(10, "Description is required"),
  contactNumber: z.string().min(1, "Contact number is required"),
  slug:z.string("Enter a value").min(1, "Slug is required"),
  restaurantEmail:z.email("Invalid email"),
  deliveryFee:z.number("Enter a number").min(1, "Delivery fee is required"),
  
})
export const createRestaurantValidator=z.object({
  restaurantName: z.string("Enter Restaurnat Name").min(1, "Name is required"),
  description:z.string("Enter a description").min(10, "Description is required"),
  contactNumber: z.string().min(1, "Contact number is required"),
  slug:z.string("Enter a value").min(1, "Slug is required"),
  restaurantEmail:z.email("Invalid email").min(1,"Email is required"),
  deliveryFee:z.number("Enter a number").min(1, "Delivery fee is required"),
  name: z.string("Enter name").min(1, "Name is required"),
    email:z.email("Invalid email").min(1,"Email is required"),
    password:z.string("Enter password").min(8, "Password is required"),
    phone:z.string("Enter phone number").min(1, "Phone number is required"),
    address:z.string("Enter address").min(1, "Address is required"),
})  




