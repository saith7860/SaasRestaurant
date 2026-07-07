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
        className="mt-16 w-full max-w-xl mx-auto bg-[var(--card-color)] border border-[var(--primary-color)]/25 rounded-3xl shadow-2xl shadow-black/40 p-8 space-y-6"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-extrabold text-[var(--primary-color)] text-center tracking-wide">
          {editVariant ? "Update Variant" : "Add Variant"}
        </h2>

        <div className="flex flex-col gap-2">

          <label
            htmlFor="variation"
            className="text-sm font-semibold text-[var(--primary-color)] tracking-wide">
            Enter Variation:</label>

          <input
            type="text"
            name="variation"
            value={formData.variation}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/15 bg-[var(--background-color)] text-[var(--text-color)] px-4 py-3 placeholder:text-white/40 focus:outline-none focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/30 transition-all duration-300"
          />

          {error.variation && (
            <p className="text-red-400 text-sm font-medium mt-1">{error.variation}</p>
          )}

        </div>

        <div className="space-y-2">

          <label
            htmlFor="price"
            className="text-sm font-semibold text-[var(--primary-color)] tracking-wide">
            Enter Price:</label>

          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/15 bg-[var(--background-color)] text-[var(--text-color)] px-4 py-3 placeholder:text-white/40 focus:outline-none focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/30 transition-all duration-300"
          />

          {error.price && (
            <p className="text-red-400 text-sm font-medium mt-1">{error.price}</p>
          )}

        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">

          <button type="submit"
            className="flex-1 bg-[var(--button-color)] text-[var(--button-text-color)] font-bold py-3 rounded-xl hover:bg-[var(--primary-color)] hover:text-black active:scale-95 transition-all duration-300 shadow-lg shadow-black/20">
            {editVariant ? "Update Variant" : "Add Variant"}
          </button>

          {editVariant && (
            <button type="button" onClick={onCancelEdit}
              className="flex-1 border border-[var(--primary-color)]/25 bg-transparent text-[var(--text-color)] hover:bg-[var(--card-color)] hover:border-[var(--primary-color)] py-3 rounded-xl transition-all duration-300"
            >
              Cancel
            </button>
          )}

        </div>

      </form>
    </>
  );
};

export default VariantForm;