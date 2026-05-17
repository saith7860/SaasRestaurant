import {useState} from "react"
import api from "../../api/api.js";
import type { Restaurant } from "../../types/DashBoardtype";
const ResturantForm = ({restaurant,showForm,setShowForm}:{
  restaurant:Restaurant | null;
  showForm:boolean;
  setShowForm:React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const [formField, setFormField] = useState({
    name: restaurant?.name || "",
    email: restaurant?.email || "",
    contactNumber: restaurant?.contactNumber || "",
    deliveryFee: restaurant?.deliveryFee || 0,
    estimatedDeliveryTime: restaurant?.estimatedDeliveryTime || 0,
  });
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
      } else {
        await api.post("/api/resturant/create-resturant", formField, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
      }
      setShowForm(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={formField.name} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" value={formField.email} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="contactNumber">Phone</label>
        <input type="text" name="contactNumber" value={formField.contactNumber} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="deliveryFee">Delivery Fee</label>
        <input type="text" name="deliveryFee" value={formField.deliveryFee} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="estimatedDeliveryTime">Estimated Delivery Time</label>
        <input type="text" name="estimatedDeliveryTime"   value={formField.estimatedDeliveryTime} onChange={handleChange}/>
      </div>
      <button type="submit">{restaurant ? "Update" : "Create"}</button>
    </form>
  )
}

export default ResturantForm;