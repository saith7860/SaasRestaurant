import { useState } from "react";
import { useDashboard } from "../../context/DashBoardContext";
import type { CategoryType } from "../../types/DashBoardtype";
import CategoryForm from "../../components/Admin/CategoryForm";

import { FaEdit, FaTrash } from "react-icons/fa";


import api from "../../api/api";


const Category = () => {
  const [showForm, setShowForm] = useState(false);
  const [editCategory, setEditCategory] = useState<CategoryType | null>(null);
  const { category, restaurant, branches, refreshDashboardData } = useDashboard();

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
    <div className="flex flex-col justify-center">

      <div className="mb-8 text-center text-2xl font-extrabold tracking-wide text-[var(--primary-color)] sm:text-3xl" >Manage Categories</div>

      <div className="flex flex-col gap-6">
        {category?.map((category: CategoryType) => (

          <div key={category._id} className="w-full rounded-2xl border border-[var(--primary-color)]/20 bg-[var(--card-color)] shadow-lg transition-all duration-300 hover:border-[var(--primary-color)]/50 hover:shadow-2xl">

            <div className="flex items-center justify-between gap-6 p-6">

              <span className="cursor-default text-xl font-bold text-[var(--primary-color)] sm:text-2xl">{category.category}</span>

              <div className="flex items-center gap-2">

                <button onClick={() => {
                  setShowForm(true);
                  setEditCategory(category);
                }}

                  className="rounded-lg bg-[var(--button-color)] p-2 text-lg text-[var(--button-text-color)] shadow transition-all duration-200 hover:bg-[var(--primary-color)] hover:text-[var(--background-color)] active:scale-95 sm:text-xl">
                  <FaEdit />
                </button>

                <button onClick={() => {
                  deleteCategory(category._id);
                }}
                  className="rounded-lg border border-red-500/20 p-2 text-lg text-red-400 transition-all duration-200 hover:bg-red-500/10 hover:text-red-300 active:scale-95 sm:text-xl">
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>
        ))}

      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
          <CategoryForm setShowForm={setShowForm} category={editCategory} restaurant={restaurant} branches={branches} />
        </div>
      )}

      <button onClick={() => {
        setShowForm(true);
        setEditCategory(null);
      }}
        className="mt-8 ml-auto rounded-xl bg-[var(--button-color)] px-8 py-3 text-lg font-semibold text-[var(--button-text-color)] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--primary-color)] hover:text-[var(--background-color)] active:scale-95"
      >
        Add Category
      </button>


    </div>


  )
}

export default Category