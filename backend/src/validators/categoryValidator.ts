import {z} from 'zod';
export const categorySchema=z.object({
    category:z.string("category name is required").trim()
    .min(3,{message:'Category should be minimum of three charachters'}),
    image:z.string(),
    branchId:z.string(),
    restaurantId:z.string(),
})