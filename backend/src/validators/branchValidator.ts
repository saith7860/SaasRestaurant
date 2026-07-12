import {z} from 'zod';
export const BranchValidator = z.object({
  name:z.string("Name of branch is required").min(4, "Name should be greater than 4"),
  address: z.string("Enter a description").min(10, "Description is required"),
  city: z.string("Enter a description").min(3, "City should be greater than 3"),
  contactNumber: z.string("Contact Number is required").min(1, "Contact number is required"),
  openingTime:z.string("Opening time is required").refine((time) => {
    const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
    return timeRegex.test(time);
  }, {
    message: "Opening time must be in HH:MM format",
  }),
  closingTime:z.string("Closing time is required").refine((time) => {
    const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
    return timeRegex.test(time);
  }, {
    message: "Closing time must be in HH:MM format",
  }),
  deliveryFee: z.string("Enter Delviery fee").min(1, "Delivery fee is required"),
  restaurant: z.string().min(1, "Restaurant id is required")
  
});
