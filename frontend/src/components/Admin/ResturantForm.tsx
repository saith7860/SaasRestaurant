import { useState } from "react"
import api from "../../api/api.js";
import { useDashboard } from "../../context/DashBoardContext.js";
import type { Restaurant } from "../../types/DashBoardtype";
import handleApiError from "../../api/handleError.js";
const ResturantForm = ({ restaurant, setShowForm }: {
  restaurant: Restaurant | null;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const [formField, setFormField] = useState({
    restaurantName: restaurant?.restaurantName || "",
    restaurantEmail: restaurant?.restaurantEmail || "",
    contactNumber: restaurant?.contactNumber || "",
    deliveryFee: restaurant?.deliveryFee || "",
    description: restaurant?.description || "",
    slug: restaurant?.slug || "",
  });
  console.log("deliver fee is", formField.deliveryFee);
  const [errors, setErrors] = useState<Record<string, string>>({});
  //refreseh when update data
  const { refreshDashboardData } = useDashboard();
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFormField({
  //     ...formField,
  //     [e.target.name]: e.target.value
  //   });
  // };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;

    setFormField(prev => ({
      ...prev,
      [name]:
        type === "number"
          ? value === ""
            ? null
            : Number(value)
          : value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (restaurant) {
        await api.put(`/api/resturant/update-resturant/${restaurant._id}`, formField);
        await refreshDashboardData();
      }
      await refreshDashboardData();
      setShowForm(false);
    } catch (error) {
      const result = handleApiError(error);

      if (result?.fieldErrors) {
        setErrors(result.fieldErrors);
      }
    }
  };
  console.log("formData of restaurnat is", formField);

  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl">


        <form action="" onSubmit={handleSubmit}
          className="mx-auto p-6 my-6 w-full max-w-4xl rounded-2xl border border-[var(--primary-color)]/20 bg-[var(--card-color)] p-6 shadow-2xl shadow-black/30">


          <div>
            <label htmlFor="restauratEmail" className="font-semibold text-[var(--primary-color)] tracking-wide">Email : </label>
            <input className="w-full mt-2 rounded-xl border border-white/15 bg-[var(--background-color)] px-4 py-3 text-[var(--text-color)] placeholder:text-white/40 focus:outline-none focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/25 transition-all duration-300" type="email" name="restaurantEmail" value={formField.restaurantEmail} onChange={handleChange} />
            <p className="mt-1 min-h-5 text-sm text-red-500">
              {errors.restaurantEmail && (<span>{errors.restaurantEmail}</span>)}
            </p>
          </div>

          <div>
            <label htmlFor="contactNumber" className="font-semibold text-[var(--primary-color)] tracking-wide">Phone : </label>
            <input className="w-full mt-2 rounded-xl border border-white/15 bg-[var(--background-color)] px-4 py-3 text-[var(--text-color)] placeholder:text-white/40 focus:outline-none focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/25 transition-all duration-300" type="tel" name="contactNumber" value={formField.contactNumber} onChange={handleChange} />
            <p className="mt-1 min-h-5 text-sm text-red-500">
              {errors.contactNumber && (<span>{errors.contactNumber}</span>)}
            </p>

          </div>

          <div>
            <label htmlFor="deliveryFee" className="font-semibold text-[var(--primary-color)] tracking-wide">Delivery Fee : </label>
            <input className="w-full mt-2 rounded-xl border border-white/15 bg-[var(--background-color)] px-4 py-3 text-[var(--text-color)] placeholder:text-white/40 focus:outline-none focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/25 transition-all duration-300" type="number" name="deliveryFee" value={formField.deliveryFee} onChange={handleChange} />
            <p className="mt-1 min-h-5 text-sm text-red-500">
              {errors.deliveryFee && (<span>{errors.deliveryFee}</span>)}
            </p>
          </div>



          <div className="mt-6 flex w-full flex-col gap-4 sm:flex-row sm:justify-end">
            
            <button type="submit" className="w-full rounded-xl bg-[var(--button-color)] py-3 text-lg font-bold text-[var(--button-text-color)] shadow-lg shadow-black/20 transition-all duration-300 hover:bg-[var(--primary-color)] hover:text-black active:scale-95">
              {restaurant ? "Update" : "Create"}
            </button>

            <button onClick={() => { setShowForm(false) }}
              className="flex flex-1 justify-center rounded-xl border border-white/15 bg-transparent px-6 py-3 text-lg font-semibold text-[var(--text-color)] transition-all duration-300 hover:border-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-black sm:flex-none"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ResturantForm;