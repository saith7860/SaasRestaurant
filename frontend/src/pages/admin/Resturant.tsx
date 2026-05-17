import { useDashboard }from "../../context/DashBoardContext";
import {useState} from "react"
import ResturantForm from "../../components/Admin/ResturantForm";
import api from "../../api/api.js";
const Resturant = () => {
  const [showForm,setShowForm]=useState(false);
    const {restaurant}=useDashboard();
    
  return (
    <div>
    <div>
   <div>{restaurant?.name}</div>
    {/* <img src={restaurant?.image} alt="" /> */}
    {/* <div>{restaurant?.description}</div> */}
    <div>Contact Number:{restaurant?.contactNumber}</div>
    <div>Email: {restaurant?.email}</div>
    <div>Delivery Fee:{restaurant?.deliveryFee}</div>
    <div>Delivery Time:{restaurant?.estimatedDeliveryTime}</div>
    </div>    
    <div>
        <button onClick={() => {
  setShowForm(true);
}}>Update Resturant</button>
    </div>
    {showForm && (
      <div>
        <ResturantForm restaurant={restaurant} showForm={showForm} setShowForm={setShowForm} />
      </div>
    )}

    </div>
  )
}

export default Resturant;