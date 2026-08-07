import {z} from 'zod';
export const createDealSchema=z.object({
    title:z.string("title is required").min(3,{message:'Title should be minimum of three charachters'}).trim(),
    branchId:z.string("branchId is required").trim(),
    restaurantId:z.string("restaurantId is required").trim(),
    items:z.array(z.object({
        variantId:z.string("variantId is required").trim().optional(),
        itemId:z.string("itemId is required").trim(),
        quantity:z.number("quantity is required").min(1,{message:'quantity should be minimum of one charachter'}),
    })),
    description:z.string("description is required").min(3,{message:'description should be minimum of three charachters'}).trim(),
}) 