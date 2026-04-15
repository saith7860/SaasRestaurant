import Item from "../models/itemModel.js";
import Category from "../models/categoryModel.js";
import type { ItemType } from "../types/itemType.js";
const showAllItems=async()=>{  
    return await Item.find({})
} 
const createItem=async(data:ItemType)=>{
  const newItem=new Item(data);
  await newItem.save();
  return newItem;
}
const getSpecificCategoryId=async(category:string)=>{
const speficCategory=await Category.findOneAndUpdate({
    category:category
});

return speficCategory;
}
const updateItemByName=async(id:string,data:ItemType)=> {
    const foundItem=await Item.findOneAndUpdate({name:id},data, { returnDocument: 'after' });
    return foundItem;
}
const deleteItemByName=async(id:string)=> {
    const delItem=await Item.findOneAndDelete({name:id});
    await Category.updateMany(
        {items:delItem?._id},
        {$pull:{items:delItem?._id}}
    )
    return delItem;
}
export {showAllItems,createItem,getSpecificCategoryId,updateItemByName,deleteItemByName}