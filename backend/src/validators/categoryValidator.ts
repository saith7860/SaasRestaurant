import {z} from 'zod';
export const categorySchema=z.object({
    category:z.string().trim()
    .min(3,{message:'Category should be minimum of three charachters'}),
    image:z.string(),
    description:z.string().min(50,{message:"Descirption should be larger than 50 charachters"})
    
})