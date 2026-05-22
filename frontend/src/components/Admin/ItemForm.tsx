import { useState, useEffect } from "react"
import api from "../../api/api";
import handleApiError from "../../api/handleError";
import type { CategoryType, ItemType, Restaurant, BranchType } from "../../types/DashBoardtype"
const ItemForm = ({ setShowForm, item, category, restaurant, branches }: {
  category: CategoryType[] | null
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>,
  item: ItemType | null
  restaurant: Restaurant | null
  branches: BranchType[] | null;
}) => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    description: "",
    categoryId: "",
    basePrice: "",
    branchId: ""
  })

  useEffect(() => {
    if (item) {
      setFormData({
        name: item.name || "",
        image: item.image || "",
        description: item.description || "",
        categoryId: item.categoryId || "",
        basePrice: item.basePrice || "",
        branchId: item.branchId || "",
      })
    }
  }, [item])
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!restaurant?._id) return;
    const token = localStorage.getItem("token");
    try {
      if (item?._id) {
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
      } else {
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
    catch (error) {
      const validationErrors = handleApiError(error);

      if (validationErrors) {

        const formattedErrors:
          Record<string, string> = {};

        validationErrors.forEach(
          (err: any) => {

            formattedErrors[err.field] =
              err.message;
          }
        );

        setErrors(formattedErrors);
      }
    }
  }
  console.log(errors);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   })
  // }
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type } = e.target;

    setFormData({
      ...formData,
      [name]:
        type === "number" ?Number(value): value
    });
  };
  console.log(formData);

  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Item Name" className="border border-white/30 rounded-md px-2" />
      {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="Enter Item Image" className="border border-white/30 rounded-md px-2" />
      {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
      <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Enter Item Description" className="border border-white/30 rounded-md px-2" />
      {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
      <input type="number" name="basePrice" value={formData.basePrice} onChange={handleChange} placeholder="Enter Base Price" className="border border-white/30 rounded-md px-2" />
      {errors.basePrice && <p className="text-red-500 text-sm">{errors.basePrice}</p>}
      {/* Select category */}

      <select name="categoryId" value={formData.categoryId} onChange={(e) =>
        setFormData({
          ...formData,
          categoryId: e.target.value,
        })
      } className="border border-white/30 rounded-md px-2">
        <option value="">Select Category</option>
        {category?.map((cat: CategoryType) => (
          <option key={cat._id} value={cat._id}>
            {cat.category}
          </option>
        ))}
      </select>
      {errors.categoryId && <p className="text-red-500 text-sm">{errors.categoryId}</p>}
      <select name="branchId" value={formData.branchId} onChange={(e) =>
        setFormData({
          ...formData,
          branchId: e.target.value,
        })
      } className="border border-white/30 rounded-md px-2">
        <option value="">Select Branch</option>
        {branches?.map((branch: BranchType) => (
          <option key={branch._id} value={branch._id}>
            {branch.name}
          </option>
        ))}
      </select>
      {errors.branchId && <p className="text-red-500 text-sm">{errors.branchId}</p>}
      <button type="submit">{item ? "Update Item" : "Add Item"}</button>
      <button onClick={() => setShowForm(false)}>Cancel</button>
    </form>
  )
}

export default ItemForm;