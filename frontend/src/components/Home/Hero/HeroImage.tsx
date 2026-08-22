import { useRestaurant } from "../../../context/RestaurantContext";

const HeroImage = () => {
  const {restaurantData} = useRestaurant();
  console.log(restaurantData?.restaurantData?.banner.publicId);
  
  return (
  
      

      <img
        src={restaurantData?.restaurantData?.banner?.url}
        alt="Burger"
        className="mt-10 mb-10 w-[100]"
      />


  );
};

export default HeroImage;