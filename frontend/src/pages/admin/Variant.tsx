import { useEffect, useState } from "react"
import { useDashboard } from "../../context/DashBoardContext"
import api from "../../api/api";
import VariantForm from "../../components/Admin/VariantForm";
import type { variantType, ItemType } from "../../types/DashBoardtype";
const Variant = () => {
  const {items}=useDashboard();
  const [itemId,setItemId]=useState<string | null>(null);
  const[variant,setVariant]=useState<variantType[] | null>(null);
  const deleteVariant=async(id:string)=>{
       const confirmDelete = window.confirm(
      "Are you sure you want to delete this branch?"
    );

    if (!confirmDelete) return
    const token=localStorage.getItem("token");
    
    try {
    await api.delete(`/api/variant/delete-variant/${id}`,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    } catch (error) {
      console.log('error in deletion',error);
      
    }
  }
  useEffect(()=>{
    if(itemId){
      const filteredVariants=items.filter((item)=>item._id==itemId);
      setVariant(filteredVariants[0].variants);
    }
  },[itemId])
  console.log(variant);
  
  return (
    <div>
     <form action="">
      <label htmlFor="Select Item"></label>
      <select name="itemId" id="itemId" onChange={(e)=>setItemId(e.target.value)}>
        <option value="">Select Item</option>
        {items?.map((item:ItemType)=>(
          <option key={item._id} value={item._id}>{item.name}</option>
        ))}
      </select>
     </form>
     {variant?.length > 0 && variant?.map((v:variantType)=>(
      <div key={v._id}>
        <p>{v.variation}</p>
        <p>{v.price}</p>
        <button >Edit</button>
        <button onClick={() => deleteVariant(v._id)}>Delete</button>
      </div>
     ))}
     {itemId && <VariantForm itemId={itemId} variant={variant}/>}
    </div>
  )
}

export default Variant;