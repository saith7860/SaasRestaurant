import {z} from 'zod';
export const categorySchema=z.object({
    category:z.string().trim()
    .min(3,{message:'Category should be minimum of three charachters'}),
    image:z.string().optional(),
})