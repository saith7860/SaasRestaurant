import api from "../../api/api.js";
import { useState, useEffect } from "react";
import { useDashboard } from "../../context/DashBoardContext.js";
import type { CategoryType, Restaurant, BranchType } from "../../types/DashBoardtype.js";
import handleApiError from "../../api/handleError.js";
const CategoryForm = ({ category, setShowForm, restaurant, branches }: {
  category: CategoryType | null;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  restaurant: Restaurant | null;
  branches: BranchType[] | null;
}) => {
  const [formData, setFormData] = useState({
    category: "",
    branchId: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  //refresh data after crud operation
  const { refreshDashboardData } = useDashboard();

  useEffect(() => {
    if (category) {
      setFormData({
        category: category.category || "",
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

    try {
      if (category?._id) {

        await api.patch(
          `/api/category/update-category/${category._id}`,
          {
            ...formData,
            restaurantId: restaurant._id,
          }
        );
        await refreshDashboardData();
      } else {
        await api.post(
          "/api/category/create-category",
          {
            ...formData,
            restaurantId: restaurant._id,
          }
        );

      }
      await refreshDashboardData();
      setShowForm(false);
    } catch (err) {
        const result = handleApiError(err);

    if (result?.fieldErrors) {
        setErrors(result.fieldErrors);
    }
    }
  };
  console.log(errors);

  return (
    <form
      className="mx-auto mt-8 flex w-full max-w-2xl flex-col gap-6 rounded-2xl border border-[var(--primary-color)]/20 bg-[var(--card-color)] p-6 shadow-2xl shadow-black/30"
      action="" onSubmit={handleCategorySubmit}>

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

        <label htmlFor="branch" className="text-sm font-semibold text-[var(--primary-color)] sm:text-base" >Select Branch : </label>

        <select
          name="branchId"
          value={formData.branchId}
          onChange={(e) =>
            setFormData({
              ...formData,
              branchId: e.target.value,
            })
          }
          className="w-full sm:w-64 rounded-xl border border-white/15 bg-[var(--background-color)] px-4 py-3 text-[var(--text-color)] transition-all duration-300 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/30 focus:outline-none"
        >
          <option className="bg-[var(--card-color)] text-[var(--text-color)]" value="">Select Branch</option>

          {branches?.map((branch) => (
            <option className="bg-[var(--card-color)] text-[var(--text-color)]" key={branch._id} value={branch._id}>
              {branch.name}
            </option>
          ))}
        </select>

      </div>
      {errors.branchId && (
        <p className="mt-1 text-sm font-medium text-red-400">{errors.branchId}</p>
      )}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <label htmlFor="category" className="text-sm font-semibold text-[var(--primary-color)] sm:text-base">Category Name : </label>
        <input type="text" name="category" value={formData.category} onChange={handleChange}
          placeholder="Enter Category"
          className="w-full sm:w-64 rounded-xl border border-white/15 bg-[var(--background-color)] px-4 py-3 text-[var(--text-color)] placeholder-white/40 transition-all duration-300 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/30 focus:outline-none"
        />
      </div>

      {errors.category && (
        <p className="mt-1 text-sm font-medium text-red-400">{errors.category}</p>
      )}

      <div className="mt-6 flex w-full flex-col gap-4 sm:flex-row sm:justify-end">
        <button type="submit"
          className="flex flex-1 justify-center rounded-xl bg-[var(--button-color)] px-6 py-3 text-lg font-semibold text-[var(--button-text-color)] shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--primary-color)] hover:text-black sm:flex-none"
        >{category ? "Update Category" : "Add Category"}</button>

        <button onClick={() => { setShowForm(false) }}
          className="flex flex-1 justify-center rounded-xl border border-white/15 bg-transparent px-6 py-3 text-lg font-semibold text-[var(--text-color)] transition-all duration-300 hover:border-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-black sm:flex-none"
        >
          Cancel
        </button>
      </div>


    </form>
  )
}


export default CategoryForm;