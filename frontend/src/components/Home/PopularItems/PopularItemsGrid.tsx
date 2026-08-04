import { useRestaurant } from "../../../context/RestaurantContext";
import ItemCard from "../ItemCard";

interface Props {
  search: string;
}

const PopularItemsGrid = ({ search }: Props) => {

  const { restaurantData } = useRestaurant();

  const items = restaurantData?.items || [];

  const popularItems = items
    .filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    )
    .slice(0, 8);

  return (

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

      {popularItems.map((item, index) => (

        <ItemCard
          key={item._id}
          item={item}
        />

      ))}

    </div>

  );
};

export default PopularItemsGrid;