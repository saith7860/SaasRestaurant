import { useMemo } from "react";
import { useRestaurant } from "../../context/RestaurantContext";
import ShowItems from "../ItemCard/ShowItems";

interface Props {
  search: string;
  selectedCategory: string;
}

const MenuItemsGrid = ({
  search,
  selectedCategory,
}: Props) => {
  const { restaurantData } = useRestaurant();

  const filteredItems = useMemo(() => {
    if (!restaurantData) return [];

    const keyword = search.trim().toLowerCase();

    // SEARCH MODE
    if (keyword) {
      return restaurantData.items.filter(
        (item) =>
          item.name.toLowerCase().includes(keyword) ||
          item.description.toLowerCase().includes(keyword)
      );
    }

    // CATEGORY MODE
    if (selectedCategory === "All") {
      return restaurantData.items;
    }

    return restaurantData.items.filter(
      (item) => item.categoryId === selectedCategory
    );
  }, [restaurantData, search, selectedCategory]);

  const heading = search.trim()
    ? `Search Results for "${search}"`
    : selectedCategory === "All"
    ? "All Items"
    : restaurantData?.category.find(
        (cat) => cat._id === selectedCategory
      )?.category || "Items";

  if (!filteredItems.length) {
    return (
      <section className="py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold">
            No Items Found
          </h2>

          <p className="mt-2 text-gray-500">
            Try another search.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="pb-20">
      <div className="mx-auto max-w-7xl px-5">

        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            {heading}
          </h2>

          <span className="rounded-full bg-[var(--primary-color)]/10 px-4 py-2 font-semibold text-[var(--primary-color)]">
            {filteredItems.length} Items
          </span>
        </div>

        <ShowItems items={filteredItems} />

      </div>
    </section>
  );
};

export default MenuItemsGrid;