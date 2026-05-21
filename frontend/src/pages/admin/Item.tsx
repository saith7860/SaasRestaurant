import { useState } from "react";
import { useDashboard } from "../../context/DashBoardContext";
import type {Item} from "../../types/DashBoardtype";
import ItemForm from "../../components/Admin/ItemForm";
import api from "../../api/api";

const Item = () => {
  const [showForm,setShowForm] = useState(false);
  const [editItem,setEditItem] = useState<Item|null>(null);
  const {items,category,branches,restaurant}=useDashboard();
  console.log(items);
  const deleteItem=async(id:string)=>{
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this branch?"
  );

  if (!confirmDelete) return
        try{
            const token=localStorage.getItem("token");
            const res=await api.delete(`/api/item/delete-item/${id}`,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            });
            console.log(res.data);
        }catch(error){
            console.log(error);
        }
    }
  return (
    <div>
      {items?.map((item)=>(
        <div>
          <div>{item.name}</div>
          <button onClick={()=>{
            setShowForm(true);
            setEditItem(item)
            }}>Edit</button>
          <button onClick={()=>deleteItem(item._id)}>Delete</button>
        </div>
      ))}
     {showForm && (
           <div>
             <ItemForm setShowForm={setShowForm} item={editItem} category={category} branches={branches} restaurant={restaurant}/>
           </div>
         )}
            <button onClick={()=>{
           setShowForm(true);
           setEditItem(null);
         }}>Add Item</button>
    </div>
  )
}

export default Item