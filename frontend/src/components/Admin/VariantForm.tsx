// import { useState } from "react"
// import type { variantType } from "../../types/DashBoardtype";
// import api from "../../api/api";
// import handleApiError from "../../api/handleError";
// import { useDashboard } from "../../context/DashBoardContext";
// const VariantForm = ({ itemId, variant }: {
//   itemId: string,
//   variant: variantType[] | null,
// }) => {
//   const [error, setErrors] = useState<Record<string, string>>({})
//   const [formData, setFormData] = useState({
//     itemId: String(itemId),
//     variation: "",
//     price: "",

//   })
//   //refresh data after crud
//   const { refreshDashboardData } = useDashboard();
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
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const token = localStorage.getItem("token")
//     try {

//       if (!token) return;
//       if (variant?._id) {
//         await api.post("/api/variant/update-variant",
//           formData, {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         }
//         )
//         setFormData({
//           itemId: String(itemId),
//           variation: "",
//           price: "",

//         })
//         setErrors({});
//       }
//       else {
//         await api.post("/api/variant/create-variant",
//           formData, {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         }
//         )
//         setFormData({
//           itemId: String(itemId),
//           variation: "",
//           price: "",

//         })
//         setErrors({});
//       }
//       await refreshDashboardData();
//     } catch (error) {
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
//   console.log(error);

//   return (
//     <>
//       <form className="flex flex-col lg:flex-row gap-8 border-2 border-[#F4B400]/30 rounded-lg p-5 mx-3" onSubmit={handleSubmit}>

//         <label htmlFor="variation">Enter Variation:  </label>
//         <input type="text" name="variation" value={formData.variation} onChange={handleChange}
//           className="border border-white/30 rounded-md px-2 w-full" />
//         {error.variation && <p className="text-red-500 text-sm">{error.variation}</p>}

//         <label htmlFor="price">Enter Price:  </label>
//         <input type="number" name="price" value={formData.price} onChange={handleChange}
//           className="border border-white/30 rounded-md px-2 w-full" />
//         {error.price && <p className="text-red-500 text-sm">{error.price}</p>}

//         <button type="submit">Add Variant</button>

//         {/* <button >Cancel</button> */}
//       </form>
//     </>
//   )
// }

// export default VariantForm;
import { useEffect, useState } from "react";
import type { variantType } from "../../types/DashBoardtype";
import api from "../../api/api";
import handleApiError from "../../api/handleError";
import { useDashboard } from "../../context/DashBoardContext";

const VariantForm = ({
  itemId,
  editVariant,
  onCancelEdit,
}: {
  itemId: string;
  editVariant: variantType | null;
  onCancelEdit: () => void;
}) => {
  const [error, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState({
    itemId: itemId,
    variation: "",
    price: "",
  });

  const { refreshDashboardData } = useDashboard();

  useEffect(() => {
    if (editVariant) {
      setFormData({
        itemId: itemId,
        variation: editVariant.variation,
        price: String(editVariant.price),
      });
    } else {
      setFormData({
        itemId: itemId,
        variation: "",
        price: "",
      });
    }

    setErrors({});
  }, [editVariant, itemId]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const payload = {
        itemId: itemId,
        variation: formData.variation,
        price: Number(formData.price),
      };

      if (editVariant) {
        await api.patch(
          `/api/variant/update-variant/${editVariant._id}`,
          { ...payload }
        );
      } else {
        await api.post(
          "/api/variant/create-variant",
          payload
        );
      }

      setFormData({
        itemId: itemId,
        variation: "",
        price: "",
      });

      setErrors({});
      onCancelEdit();

      await refreshDashboardData();
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
    <>
      <form
        className="mt-20 max-w-lg mx-auto w-full bg-[#2A2633] border border-[#F4B400]/20 rounded-2xl shadow-xl p-6 space-y-6"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-[#F4B400]">
          {editVariant ? "Update Variant" : "Add Variant"}
        </h2>

        <div className="space-y-2 ">

          <label
            htmlFor="variation"
            className="block text-sm font-semibold text-white">
            Enter Variation:</label>

          <input
            type="text"
            name="variation"
            value={formData.variation}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-600 bg-[#1F1B29] text-white px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F4B400] focus:border-[#F4B400] transition" />

          {error.variation && (
            <p className="text-red-400 text-sm">{error.variation}</p>
          )}

        </div>

        <div className="space-y-2">

          <label
            htmlFor="price"
            className="block text-sm font-semibold text-white">
            Enter Price:</label>

          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-600 bg-[#1F1B29] text-white px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F4B400] focus:border-[#F4B400] transition" />

          {error.price && (
            <p className="text-red-500 text-sm">{error.price}</p>
          )}

        </div>

        <div className="flex gap-3 pt-2">

          <button type="submit"
            className=" flex-1 bg-[#984447]  hover:bg-[#F4B400] hover:text-black text-white  font-semibold py-3 rounded-lg transition-all duration-300 ">
            {editVariant ? "Update Variant" : "Add Variant"}
          </button>

          {editVariant && (
            <button type="button" onClick={onCancelEdit} className=" flex-1 border border-gray-500 text-gray-300 hover:bg-gray-700 py-3 rounded-lg transition ">
              Cancel
            </button>
          )}

        </div>

      </form>
    </>
  );
};

export default VariantForm;