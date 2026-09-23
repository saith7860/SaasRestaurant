import ItemCard from "./ItemCard";
import type { ItemType } from "../../types/HomePageTypes";

interface ShowItemsProps {
  items: ItemType[];
}

const ShowItems = ({ items }: ShowItemsProps) => {
  return (
    <div className="
      grid
      grid-cols-2
      md:grid-cols-3
      xl:grid-cols-5
      gap-4
      md:gap-6
    ">
      {items.map((item) => (
        <ItemCard
          key={item._id}
          item={item}
        />
      ))}
    </div>
  );
};

export default ShowItems;