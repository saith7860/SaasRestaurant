import api from "../../api/api.js";
import { useState,useEffect } from "react";
import type { CategoryType,Restaurant,BranchType } from "../../types/DashBoardtype.js";
const CategoryForm = ({ category,setShowForm,restaurant,branches }: {
    category:CategoryType | null;
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
    restaurant: Restaurant | null;
    branches: BranchType[] | null;
}) => {
     const [formData, setFormData] = useState({
        category:"",
        image: "",
        branchId:"",
    });

    
    useEffect(() => {
    if (category) {
      setFormData({
        category: category.category || "",
        image: category.image || "",
        branchId: category.branchId || "",
      });
    }
  }, [category]);
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
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

        setShowForm(false);
    } catch (err) {
        console.log(err);
    }
};
  return (
  <form action="" onSubmit={handleCategorySubmit}>
    <select
  name="branchId"
  value={formData.branchId}
  onChange={(e) =>
    setFormData({
      ...formData,
      branchId: e.target.value,
    })
  }
>
  <option value="">Select Branch</option>

  {branches?.map((branch) => (
    <option key={branch._id} value={branch._id}>
      {branch.name}
    </option>
  ))}
</select>
    <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Enter Category" className="border border-white/30 rounded-md px-2"/>
    <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="Enter Image" className="border border-white/30 rounded-md px-2"/>
    <button type="submit">{category ? "Update Category" : "Add Category"}</button>
    <button onClick={()=>{setShowForm(false)}}>Cancel</button>
  </form>
  )
}

export default CategoryForm;