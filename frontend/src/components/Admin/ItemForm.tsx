import { useState,useEffect } from "react"
import api from "../../api/api"
import type { CategoryType, ItemType,Restaurant } from "../../types/DashBoardtype"
const ItemForm = ({setShowForm,item,category,restaurant}:{
  category:CategoryType[]|null
  setShowForm:React.Dispatch<React.SetStateAction<boolean>>,
  item:ItemType|null
  restaurant:Restaurant|null
}) => {
  const [formData,setFormData] = useState({
    name:"",
    image:"",
    description:"",
    categoryId:"",
  })

  useEffect(()=>{
    if(item){
      setFormData({
        name:item.name||"",
        image:item.image||"",
        description:item.description||"",
        categoryId:item.categoryId||"",
      })
    }
  },[item])
  const handleSubmit=async(e:React.FormEvent)=>{
    e.preventDefault();
    if (!restaurant?._id) return;
    const token = localStorage.getItem("token");
    try{
      if(item?._id){
        await api.patch(
          `/api/item/update-item/${item._id}`,
          {
            ...formData,
            restaurantId: restaurant._id,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      }else{
        await api.post(
          "/api/item/create-item",
          {
            ...formData,
            restaurantId: restaurant._id,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      }
      setShowForm(false)
    }
    catch(err){
      console.log(err);
    }
  }
  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
  }
  return (
    <form action="" onSubmit={handleSubmit}>
     <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Item Name" className="border border-white/30 rounded-md px-2"/>
     <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="Enter Item Image" className="border border-white/30 rounded-md px-2"/>
     <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Enter Item Description" className="border border-white/30 rounded-md px-2"/>
     {/* Select category */}
     <select name="categoryId" value={formData.categoryId} onChange={(e) =>
    setFormData({
      ...formData,
      categoryId: e.target.value,
    })
  } className="border border-white/30 rounded-md px-2">
       <option value="">Select Category</option>
       {category?.map((cat:CategoryType) => (
         <option key={cat._id} value={cat._id}>
           {cat.category}
         </option>
       ))}
     </select>
     <button type="submit">{item ? "Update Item" : "Add Item"}</button>
    </form>
  )
}

export default ItemForm