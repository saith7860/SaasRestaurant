import { useRestaurant } from "../../../context/RestaurantContext";
import CategoryCard from "./CategoryCard";

const CategoryGrid = () => {

  const { restaurantData } = useRestaurant();

  const categories = restaurantData?.category.slice(0, 6) || [];

  return (

      <div
        className="
          flex
          gap-4
          overflow-x-auto
          whitespace-nowrap
          scrollbar-hide
          pb-2
          scroll-smooth
          snap-x
          snap-mandatory
        "
      >

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