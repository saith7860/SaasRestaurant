import Category from "../models/categoryModel.js"
const showAllMenu=async()=>{
    return await Category.find();
} 
export {showAllMenu}