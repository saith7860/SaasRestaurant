import Order from "../models/orderModel.js";
import { OrderType } from "../types/order.js";

const showAllOrders=async(restaurantId:string)=>{
    const orders=await Order.find({restaurantId:restaurantId}).populate("userId","name phone");
    return orders
} 
const createOrder=async(userId:string,data:OrderType)=>{
  const newOrder=new Order({...data,userId:userId});
  await newOrder.save();
  return newOrder;
}
const updateOrderStatus=async(id:string,orderStatus:string)=>{
  console.log('id is',id);
  console.log('order status is',orderStatus);
  const updatedOrder=await Order.findByIdAndUpdate(id,{orderStatus:orderStatus},{returnDocument:'after'});
  console.log(updatedOrder);
  
  return updatedOrder;
}
// const getSpecificCategoryId=async(category:string)=>{
// const speficCategory=await Category.findOneAndUpdate({
//     category:category
// });

// return speficCategory;
// }
// const updateItemByName=async(id:string,data:ItemType)=> {
//     const foundItem=await Item.findOneAndUpdate({name:id},data, { returnDocument: 'after' });
//     return foundItem;
// }
// const deleteItemByName=async(id:string)=> {
//     const delItem=await Item.findOneAndDelete({name:id});
//     await Category.updateMany(
//         {items:delItem?._id},
//         {$pull:{items:delItem?._id}}
//     )
//     return delItem;
// }
export {showAllOrders,createOrder,updateOrderStatus}