import { useState } from "react";
import { useDashboard } from "../../context/DashBoardContext";
import type { CategoryType } from "../../types/DashBoardtype";
import CategoryForm from "../../components/Admin/CategoryForm";

import { FaEdit, FaTrash } from "react-icons/fa";


import api from "../../api/api";


const Category = () => {
  const [showForm, setShowForm] = useState(false);
  const [editCategory, setEditCategory] = useState<CategoryType | null>(null);
  const { category, restaurant, branches,refreshDashboardData } = useDashboard();

  const deleteCategory = async (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this branch?"
    );

    if (!confirmDelete) return
    try {
      const res = await api.delete(`/api/category/delete-category/${id}`);
      console.log(res.data);
    await refreshDashboardData();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>

      <div className="text-center font-bold sm:font-black text-xl sm:text-2xl md:text-3xl mb-10 " >Manage Categories</div>

      <div className="flex flex-col gap-5">
        {category?.map((category: CategoryType) => (

          <div key={category._id} className=" inline-block w-full border-2 border-[#F4B400]/30 rounded-lg items-center gap-3">

            <div className="flex items-center justify-between p-5 gap-7 w-full">

              <span className="font-black text-xl sm:text-2xl text-[#984447] cursor-default">{category.category}</span>

              <div className="flex items-center gap-3">
                <button onClick={() => {
                  setShowForm(true);
                  setEditCategory(category);
                }} 
                className="cursor-pointer text-xl sm:text-2xl text-[#F4B400] hover:text-[#F4B400]/70 focus:text-[#984447]/70"><FaEdit /></button>

                <button onClick={() => {
                  deleteCategory(category._id);
                }}
                className="cursor-pointer text-xl sm:text-2xl text-[#F4B400] hover:text-[#F4B400]/70 focus:text-[#984447]/70"><FaTrash /></button>
              </div>
            </div>
          </div>
        ))}

      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-2 mx-2">
          <CategoryForm setShowForm={setShowForm} category={editCategory} restaurant={restaurant} branches={branches} />
        </div>
      )}

      <button onClick={() => {
        setShowForm(true);
        setEditCategory(null);
      }}
      className=" bg-[#984447] hover:bg-[#F4B400] transition text-white py-2 px-4 rounded-md font-semibold text-lg text-center cursor-pointer mt-10 flex justify-center mx-auto" 
      >Add Category</button>


    </div>


  )
}

export default Category