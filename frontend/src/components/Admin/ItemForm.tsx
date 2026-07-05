// import { useState, useEffect } from "react"
// import api from "../../api/api";
// import handleApiError from "../../api/handleError";
// import type { CategoryType, ItemType, Restaurant, BranchType } from "../../types/DashBoardtype"
// import { useDashboard } from "../../context/DashBoardContext";
// const ItemForm = ({ setShowForm, item, category, restaurant, branches }: {
//   category: CategoryType[] | null
//   setShowForm: React.Dispatch<React.SetStateAction<boolean>>,
//   item: ItemType | null
//   restaurant: Restaurant | null
//   branches: BranchType[] | null;
// }) => {
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [formData, setFormData] = useState({
//     name: "",
//     image: "",
//     description: "",
//     categoryId: "",
//     basePrice: "",
//     branchId: ""
//   })
//   //refresh page after crud operations
//   const {refreshDashboardData}=useDashboard();
//   useEffect(() => {
//     if (item) {
//       setFormData({
//         name: item.name || "",
//         image: item.image || "",
//         description: item.description || "",
//         categoryId: item.categoryId || "",
//         basePrice: item.basePrice || "",
//         branchId: item.branchId || "",
//       })
//     }
//   }, [item])
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!restaurant?._id) return;
//     try {
//       if (item?._id) {
//         await api.patch(
//           `/api/item/update-item/${item._id}`,
//           {
//             ...formData,
//             restaurantId: restaurant._id,
//           }
//         );
//         await refreshDashboardData();
//       } else {
//         await api.post(
//           "/api/item/create-item",
//           {
//             ...formData,
//             restaurantId: restaurant._id,
//           }
//         );
//         await refreshDashboardData();
//       }
//       await refreshDashboardData();
//       setShowForm(false)
//     }
//     catch (error) {
//       const validationErrors = handleApiError(error);

//       if (validationErrors) {

//         const formattedErrors:
//           Record<string, string> = {};

//         validationErrors.forEach(
//           (err: any) => {

//             formattedErrors[err.field] =
//               err.message;
//           }
//         );

//         setErrors(formattedErrors);
//       }
//     }
//   }
//   console.log(errors);

//   // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   //   setFormData({
//   //     ...formData,
//   //     [e.target.name]: e.target.value
//   //   })
//   // }
//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const { name, value, type } = e.target;

//     setFormData({
//       ...formData,
//       [name]:
//         type === "number" ? Number(value) : value
//     });
//   };
//   console.log(formData);

//   return (
//     <form className="border-2 border-[#F4B400]/30 rounded-lg p-5 mx-3 overflow-hidden" action="" onSubmit={handleSubmit}>

//       <div className="flex-col items-start gap-2 mb-5">
//         <label htmlFor="name" className="text-[#984447] font-bold text-sm  sm:font-bold sm:text-lg block" >Item Name : </label>
//         <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Item Name" className="border border-white/30 rounded-md px-2 w-full" />

//         {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//       </div>


//       <div className="flex-col items-start gap-2 mb-5">
//         <label htmlFor="image" className="text-[#984447] font-bold text-sm  sm:font-bold sm:text-lg block" >Item Image : </label>
//         <input type="text" name="image" value={formData.image} onChange={handleChange} className="border border-white/30 rounded-md px-2 underline text-blue-400 w-full" />

//         {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
//       </div>


//       <div className="flex-col items-start gap-4 mb-5">
//         <label htmlFor="description" className="text-[#984447] font-bold text-sm  sm:font-bold sm:text-lg block" >Item Description : </label>
//         <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Enter Item Description" className="border border-white/30 rounded-md px-2 w-full" />

//         {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
//       </div>

//       <div className="flex-col items-start gap-2 mb-5">
//         <label htmlFor="basePrice" className="text-[#984447] font-bold text-sm  sm:font-bold sm:text-lg block" >Base Price : </label>
//         <input type="number" name="basePrice" value={formData.basePrice} onChange={handleChange} placeholder="Enter Base Price" className="border border-white/30 rounded-md px-2 w-full" />

//         {errors.basePrice && <p className="text-red-500 text-sm">{errors.basePrice}</p>}
//         {/* Select category */}
//       </div>

//       < hr className="text-[#F4B400]/70" />

//       <div className="flex items-center justify-between gap-2 my-5">

//         <label htmlFor="categoryId" className="text-[#984447] font-bold text-sm  sm:font-bold sm:text-lg " >Category : </label>
//         <select name="categoryId" value={formData.categoryId} onChange={(e) =>
//           setFormData({
//             ...formData,
//             categoryId: e.target.value,
//           })
//         }
//           className="border border-white/30 text-[#F4B400] bg-[#984447] rounded-md px-2 py-1">
//           <option value="">Select Category</option>
//           {category?.map((cat: CategoryType) => (
//             <option key={cat._id} value={cat._id}>
//               {cat.category}
//             </option>
//           ))}
//         </select>

//         {errors.categoryId && <p className="text-red-500 text-sm">{errors.categoryId}</p>}

//       </div>

//       <div className="flex items-center justify-between gap-2 mb-5">

//         <label htmlFor="branchId" className="text-[#984447] font-bold text-sm  sm:font-bold sm:text-lg " >Branch : </label>
//         <select name="branchId" value={formData.branchId} onChange={(e) =>
//           setFormData({
//             ...formData,
//             branchId: e.target.value,
//           })
//         }
//           className="border border-white/30 text-[#F4B400] bg-[#984447] rounded-md px-2 py-1">
//           <option value="">Select Branch</option>
//           {branches?.map((branch: BranchType) => (
//             <option key={branch._id} value={branch._id}>
//               {branch.name}
//             </option>
//           ))}
//         </select>
//         {errors.branchId && <p className="text-red-500 text-sm">{errors.branchId}</p>}

//       </div>


//       <div className="flex items-center justify-center w-full gap-4 mt-5">
//         <button type="submit"
//           className=" bg-[#984447] hover:bg-[#F4B400] transition text-white py-2 px-4 rounded-md font-semibold text-lg text-center cursor-pointer mt-10 flex justify-center"
//         >{item ? "Update Item" : "Add Item"}</button>
        
//         <button
          
//           className=" bg-[#984447] hover:bg-[#F4B400] transition text-white py-2 px-4 rounded-md font-semibold text-lg text-center cursor-pointer mt-10 flex justify-center"
//           onClick={() => setShowForm(false)}>Cancel</button>
//       </div>

//     </form>
//   )
// }

// export default ItemForm;
import { useState, useEffect } from "react";
import api from "../../api/api";
import handleApiError from "../../api/handleError";
import type {
  CategoryType,
  ItemType,
  Restaurant,
  BranchType,
} from "../../types/DashBoardtype";
import { useDashboard } from "../../context/DashBoardContext";

const ItemForm = ({
  setShowForm,
  item,
  category,
  restaurant,
  branches,
}: {
  category: CategoryType[] | null;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  item: ItemType | null;
  restaurant: Restaurant | null;
  branches: BranchType[] | null;
}) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [imageFile, setImageFile] = useState<File | null>(null);


  const [formData, setFormData] = useState({
    name: "",
    description: "",
    categoryId: "",
    basePrice: "",
    branchId: "",
  });

  const { refreshDashboardData } = useDashboard();

  const getId = (value: any) => {
    if (!value) return "";
    if (typeof value === "string") return value;
    return value._id || "";
  };


  useEffect(() => {
    if (item) {
      setFormData({
        name: item.name || "",
        description: item.description || "",
        categoryId: getId(item.categoryId),
        basePrice: String(item.basePrice || ""),
        branchId: getId(item.branchId),
      });
    }
  }, [item]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setImageFile(file);
  

    setErrors((prev) => ({
      ...prev,
      image: "",
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!restaurant?._id) return;

    try {
      const data = new FormData();

      data.append("name", formData.name);
      data.append("description", formData.description);
      data.append("basePrice", formData.basePrice);
      data.append("categoryId", formData.categoryId);
      data.append("branchId", formData.branchId);
      data.append("restaurantId", restaurant._id);

      if (imageFile) {
        data.append("image", imageFile);
      }

      if (item?._id) {
        await api.patch(`/api/item/update-item/${item._id}`, data);
      } else {
        await api.post("/api/item/create-item", data);
      }

      await refreshDashboardData();
      setShowForm(false);
    } catch (error) {
      const validationErrors = handleApiError(error);

      if (validationErrors) {
        const formattedErrors: Record<string, string> = {};

        validationErrors.forEach((err: any) => {
          formattedErrors[err.field] = err.message;
        });

        setErrors(formattedErrors);
      }
    }
  };

  return (
    <form
      className="border-2 border-[#F4B400]/30 rounded-lg p-5 mx-3 overflow-hidden"
      onSubmit={handleSubmit}
    >
      <div className="flex-col items-start gap-2 mb-5">
        <label
          htmlFor="name"
          className="text-[#984447] font-bold text-sm sm:font-bold sm:text-lg block"
        >
          Item Name :
        </label>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter Item Name"
          className="border border-white/30 rounded-md px-2 w-full"
        />

        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      <div className="flex-col items-start gap-2 mb-5">
        <label
          htmlFor="image"
          className="text-[#984447] font-bold text-sm sm:font-bold sm:text-lg block"
        >
          Item Image :
        </label>

        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          className="border border-white/30 rounded-md px-2 py-1 w-full"
        />

   

        {errors.image && (
          <p className="text-red-500 text-sm">{errors.image}</p>
        )}
      </div>

      <div className="flex-col items-start gap-4 mb-5">
        <label
          htmlFor="description"
          className="text-[#984447] font-bold text-sm sm:font-bold sm:text-lg block"
        >
          Item Description :
        </label>

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter Item Description"
          className="border border-white/30 rounded-md px-2 py-1 w-full min-h-5 max-h-20"
        />

        {errors.description && (
          <p className="text-red-500 text-sm">{errors.description}</p>
        )}
      </div>

      <div className="flex-col items-start gap-2 mb-5">
        <label
          htmlFor="basePrice"
          className="text-[#984447] font-bold text-sm sm:font-bold sm:text-lg block"
        >
          Base Price :
        </label>

        <input
          type="number"
          name="basePrice"
          value={formData.basePrice}
          onChange={handleChange}
          placeholder="Enter Base Price"
          className="border border-white/30 rounded-md px-2 w-full"
        />

        {errors.basePrice && (
          <p className="text-red-500 text-sm">{errors.basePrice}</p>
        )}
      </div>

      <hr className="text-[#F4B400]/70" />

      <div className="flex items-center justify-between gap-2 my-5">
        <label
          htmlFor="categoryId"
          className="text-[#984447] font-bold text-sm sm:font-bold sm:text-lg"
        >
          Category :
        </label>

        <select
          name="categoryId"
          value={formData.categoryId}
          onChange={(e) =>
            setFormData({
              ...formData,
              categoryId: e.target.value,
            })
          }
          className="border border-white/30 text-[#F4B400] bg-[#984447] rounded-md px-2 py-1"
        >
          <option value="">Select Category</option>

          {category?.map((cat: CategoryType) => (
            <option key={cat._id} value={cat._id}>
              {cat.category}
            </option>
          ))}
        </select>
      </div>

      {errors.categoryId && (
        <p className="text-red-500 text-sm mb-3">{errors.categoryId}</p>
      )}

      <div className="flex items-center justify-between gap-2 mb-5">
        <label
          htmlFor="branchId"
          className="text-[#984447] font-bold text-sm sm:font-bold sm:text-lg"
        >
          Branch :
        </label>

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
          <option value="">Select Branch</option>

          {branches?.map((branch: BranchType) => (
            <option key={branch._id} value={branch._id}>
              {branch.name}
            </option>
          ))}
        </select>
      </div>

      {errors.branchId && (
        <p className="text-red-500 text-sm mb-3">{errors.branchId}</p>
      )}

      <div className="flex items-center justify-center w-full gap-4 mt-5">
        <button
          type="submit"
          className="bg-[#984447] hover:bg-[#F4B400] transition text-white py-2 px-4 rounded-md font-semibold text-lg text-center cursor-pointer mt-10 flex justify-center"
        >
          {item ? "Update Item" : "Add Item"}
        </button>

        <button
          type="button"
          className="bg-[#984447] hover:bg-[#F4B400] transition text-white py-2 px-4 rounded-md font-semibold text-lg text-center cursor-pointer mt-10 flex justify-center"
          onClick={() => setShowForm(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ItemForm;