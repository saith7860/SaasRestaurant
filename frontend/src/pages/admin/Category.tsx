import { useState } from "react";
import { useDashboard } from "../../context/DashBoardContext";
import type {CategoryType} from "../../types/DashBoardtype";
import CategoryForm from "../../components/Admin/CategoryForm";
import api from "../../api/api";


const Category = () => {
    const [showForm,setShowForm] = useState(false);
    const [editCategory,setEditCategory] = useState<CategoryType|null>(null);
    const {category,restaurant,branches}=useDashboard();
    console.log(category);
    console.log(restaurant);
    console.log(branches);
    const deleteCategory=async(id:string)=>{
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this branch?"
  );

  if (!confirmDelete) return
        try{
            const token=localStorage.getItem("token");
            const res=await api.delete(`/api/category/delete-category/${id}`,{
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
    {category?.map((category:CategoryType)=>(
        <div key={category._id}>
            <div>{category.category}</div>
            <img src={category.image} alt={category.category} width={200} height={200}/>
            <button onClick={()=>{
              setShowForm(true);
              setEditCategory(category);
            }}>Edit</button>
            <button onClick={()=>{
              deleteCategory(category._id);
            }}>Delete</button>
        </div>
    ))}
    {showForm && (
      <div>
        <CategoryForm setShowForm={setShowForm} category={editCategory} restaurant={restaurant} branches={branches}/>
      </div>
    )}
       <button onClick={()=>{
      setShowForm(true);
      setEditCategory(null);
    }}>Add Category</button>
  </div>
  )
}

export default Category