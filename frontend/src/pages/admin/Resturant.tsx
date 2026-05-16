import { useDashboard }from "../../context/DashBoardContext";

const Resturant = () => {
    const {restaurant}=useDashboard();
    
  return (
    <div>{restaurant?.name}</div>
  )
}

export default Resturant;