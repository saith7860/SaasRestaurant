import { useRestaurant } from "../../../context/RestaurantContext";
import CategoryCard from "./CategoryCard";

const CategoryGrid = () => {

  const { restaurantData } = useRestaurant();

  const categories = restaurantData?.category.slice(0, 6) || [];

  return (

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

      {categories.map((category) => (

        <CategoryCard
          key={category._id}
          category={category}
        />

      ))}

    </div>

  );
};

export default CategoryGrid;