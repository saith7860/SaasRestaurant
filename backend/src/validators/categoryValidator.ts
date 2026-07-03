import {z} from 'zod';
export const categorySchema=z.object({
    category:z.string("category name is required").trim()
    .min(3,{message:'Category should be minimum of three charachters'}),
    branchId:z.string('branch Id is required'),
    restaurantId:z.string('restaurant Id is required'),
})
