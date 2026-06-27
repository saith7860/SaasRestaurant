import {useState} from "react"
import api from "../../api/api.js";
import { useDashboard } from "../../context/DashBoardContext.js";
import type { Restaurant } from "../../types/DashBoardtype";
const ResturantForm = ({restaurant,setShowForm}:{
  restaurant:Restaurant | null;
  setShowForm:React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const [formField, setFormField] = useState({
    name: restaurant?.name || "",
    email: restaurant?.email || "",
    contactNumber: restaurant?.contactNumber || "",
    deliveryFee: restaurant?.deliveryFee || 0,
    estimatedDeliveryTime: restaurant?.estimatedDeliveryTime || 0,
  });
  //refreseh when update data
  const {refreshDashboardData}=useDashboard();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormField({
      ...formField,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (restaurant) {
        await api.patch(`/api/resturant/update-resturant/${restaurant._id}`, formField, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        await refreshDashboardData();
      } else {
        await api.post("/api/resturant/create-resturant", formField, {
            headers: {
            Authorization: `Bearer ${token}`
          }
        });
      }
      await refreshDashboardData();
      setShowForm(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-3 text-sm sm:text-base md:text-lg bg-[#2A2633] p-5 mt-5 rounded-lg">
        
        <div>
          <label htmlFor="name">Name : </label>
          <input className="border border-white/30 rounded-md px-2 " type="text" name="name" value={formField.name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email : </label>
          <input className="border border-white/30 rounded-md px-2 " type="email" name="email" value={formField.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="contactNumber">Phone : </label>
          <input className="border border-white/30 rounded-md px-2 " type="tel" name="contactNumber" value={formField.contactNumber} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="deliveryFee">Delivery Fee : </label>
          <input className="border border-white/30 rounded-md px-2 " type="number" name="deliveryFee" value={formField.deliveryFee} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="estimatedDeliveryTime">Estimated Delivery Time : </label>
          <input className="border border-white/30 rounded-md px-2 " type="number" name="estimatedDeliveryTime"   value={formField.estimatedDeliveryTime} onChange={handleChange}/>
        </div>

      </div>

        <div
          className="w-fit bg-[#984447] hover:bg-[#F4B400] transition text-white mt-6 mx-auto py-2 px-4 rounded-md font-semibold text-lg text-center cursor-pointer">
          <button type="submit">{restaurant ? "Update" : "Create"}</button>
        </div>
    </form>
  )
}

export default ResturantForm;