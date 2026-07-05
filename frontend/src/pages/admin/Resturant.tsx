import { useDashboard } from "../../context/DashBoardContext";
import { useState } from "react"
import ResturantForm from "../../components/Admin/ResturantForm";
const Resturant = () => {
  const [showForm, setShowForm] = useState(false);
  const { restaurant } = useDashboard();

  return (
    
    <div className="px-auto mx-[clamp(1rem,28px,2rem)]">

      <div>
        <div className="text-center font-bold sm:font-black text-xl sm:text-2xl md:text-3xl mb-10 " >{restaurant?.restaurantName}</div>
        <div className="flex flex-col gap-3 text-sm sm:text-base md:text-lg bg-[#2A2633] p-5 rounded-lg">
          {/* <img src={restaurant?.image} alt="" /> */}
          {/* <div>{restaurant?.description}</div> */}
          <div>Contact Number:  {restaurant?.contactNumber}</div>

          <div>Email: {restaurant?.restaurantEmail}</div>
          <div>Delivery Fee: {restaurant?.deliveryFee}</div>
          <div>Delivery Time: {restaurant?.estimatedDeliveryTime}</div>
        </div>
      </div>

      <div 
            className="w-fit bg-[#984447] hover:bg-[#F4B400] transition text-white mt-6 mx-auto p-2 rounded-md font-semibold text-lg text-center cursor-pointer">
        <button onClick={() => {
          setShowForm(true);
        }}>Update Resturant</button>
      </div>

      {showForm && (
        <div>
          <ResturantForm restaurant={restaurant}  setShowForm={setShowForm} />
        </div>
      )}

    </div>
  )
}

export default Resturant;