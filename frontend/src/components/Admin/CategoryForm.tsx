import api from "../../api/api.js";
import { useState, useEffect } from "react";
import { useDashboard } from "../../context/DashBoardContext.js";
import type { CategoryType, Restaurant, BranchType } from "../../types/DashBoardtype.js";
const CategoryForm = ({ category, setShowForm, restaurant, branches }: {
  category: CategoryType | null;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  restaurant: Restaurant | null;
  branches: BranchType[] | null;
}) => {
  const [formData, setFormData] = useState({
    category: "",
    image: "",
    branchId: "",
  });
  //refresh data after crud operation
  const {refreshDashboardData}=useDashboard();

  useEffect(() => {
    if (category) {
      setFormData({
        category: category.category || "",
        image: category.image || "",
        branchId: category.branchId || "",
      });
    }
  }, [category]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  //hanlding the submission of category if not there and editing if available before
  const handleCategorySubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!restaurant?._id) return;

    const token = localStorage.getItem("token");

    try {
      if (category?._id) {

        await api.patch(
          `/api/category/update-category/${category._id}`,
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
        await refreshDashboardData();
      } else {
        await api.post(
          "/api/category/create-category",
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
        await refreshDashboardData();
      setShowForm(false);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form className="flex-col border-2 border-[#F4B400]/30 rounded-lg flex items-start gap-3 p-5 mx-3 overflow-hidden" action="" onSubmit={handleCategorySubmit}>

      <div className="flex items-center gap-2 mb-5">

        <label htmlFor="branch" className="text-[#984447] font-bold text-sm  sm:font-bold sm:text-lg " >Select Branch : </label>

        <select
          name="branchId"
          value={formData.branchId}
          onChange={(e) =>
            setFormData({
              ...formData,
              branchId: e.target.value,
            })
          }

          className="border border-white/30 text-[#F4B400] bg-[#984447] rounded-md px-2 py-1"

        >
          <option className="text-[#F4B400] bg-[#984447]" value="">Select Branch</option>

          {branches?.map((branch) => (
            <option className="text-[#F4B400] bg-[#984447]" key={branch._id} value={branch._id}>
              {branch.name}
            </option>
          ))}
        </select>

      </div>

      <div className="flex items-center gap-2 mb-5">
        <label htmlFor="category"  className="text-[#984447] font-bold text-sm  sm:font-bold sm:text-lg ">Category Name : </label>
        <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Enter Category" className="border border-white/30 rounded-md px-1" />
      </div>


      {/* <input
        type="text"
        //accept="image/*"
        name="image"
        value={formData.image}
        onChange={handleChange}
        className="underline  text-blue-400 font-medium" /> */}

      <div className="flex items-center justify-end w-full gap-4 mt-5">
        <button type="submit" className=" bg-[#984447] hover:bg-[#F4B400] transition text-white py-2 px-2 sm:px-4 rounded-md font-semibold text-lg text-center cursor-pointer flex justify-center"
        >{category ? "Update Category" : "Add Category"}</button>

        <button onClick={() => { setShowForm(false) }} className="bg-[#984447] hover:bg-[#F4B400] transition text-white py-2 px-4 rounded-md font-semibold text-lg text-center cursor-pointer flex justify-center">
          Cancel
        </button>
      </div>


    </form>
  )
}


export default CategoryForm;