import { useRestaurant } from "../../context/RestaurantContext";
const FooterHours = () => {
    const { restaurantData } = useRestaurant();
  return (
    <div>

      <h3 className="mb-6 text-lg font-bold text-white">
        Opening Time
      </h3>

      <div className="space-y-3 text-white/70">


        <p>{restaurantData?.branches?.[0].openingTime || "Not Available"}</p>

      <h3 className="mb-6 text-lg font-bold text-white">
        Closing Time
      </h3>

        <p>{restaurantData?.branches?.[0].closingTime || "Not Available"}</p>


      </div>

    </div>
  );
};

export default FooterHours;