import { useEffect, useMemo, useState } from "react";
import { useRestaurant } from "../../context/RestaurantContext";
import ItemCard from "./ItemCard";
import type { CategoryType } from "../../types/DashBoardtype";
import type { ItemType } from "../../types/HomePageTypes";


interface SpecificCatogiresProps {
  search: string;
}

const SpecificCatogires = ({ search }: SpecificCatogiresProps) => {
  const [category, setCategory] = useState<CategoryType | null>(null);
  const { restaurantData } = useRestaurant();

  const categories = restaurantData?.category || [];
  const allItems = restaurantData?.items || [];

  // First category pre-selected
  useEffect(() => {
    if (categories.length > 0 && !category) {
      setCategory(categories[0]);
    }
  }, [categories, category]);

  const displayedItems = useMemo(() => {
    const searchText = search.trim().toLowerCase();

    if (searchText) {
      const matchedCategory = categories.find((cat: CategoryType) =>
        cat.category.toLowerCase().includes(searchText)
      );

      if (matchedCategory) {
        return allItems.filter((item: ItemType) =>
          matchedCategory.items.includes(item._id)
        );
      }

      return allItems.filter((item: ItemType) =>
        item.name.toLowerCase().includes(searchText) ||
        item.description?.toLowerCase().includes(searchText)
      );
    }

    if (!category) return [];

    return allItems.filter((item) =>
      category.items.includes(item._id)
    );
  }, [search, category, allItems, categories]);

  const handleCategory = (selectedCategory: CategoryType) => {
    setCategory(selectedCategory);
  };

  return (
    <div className="mx-2 md:mx-4 my-5 text-[var(--text-color)]">
      {/* Hide categories while searching, optional but cleaner */}
      {!search.trim() && (
        <div className="flex gap-3 mb-8 overflow-x-auto whitespace-nowrap scrollbar-hide pb-2 px-1">

          {categories.map((cat: CategoryType) => (
            <button
              key={cat._id}
              className={`${category?._id === cat._id ? "bg-[var(--primary-color)] text-[var(--background-color)] shadow-lg shadow-[var(--primary-color)]/25 scale-105" : "bg-[var(--card-color)] text-[var(--text-color)] border border-[var(--primary-color)]/20 hover:border-[var(--primary-color)]/60 hover:bg-[var(--secondary-color)]"} text-sm sm:text-base font-semibold px-5 py-2.5  rounded-xl transition-all duration-300 shrink-0`}
              onClick={() => handleCategory(cat)}
            >
              {cat.category}
            </button>
          ))}
        </div>
      )}

      {search.trim() && (
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--primary-color)] mb-6">
          Search results for: "{search}"
        </h2>
      )}

      {displayedItems.length === 0 ? (
        <p className="text-[var(--text-color)]/60 text-lg text-center py-12 font-medium">No item found.</p>
      ) : (

        <div className="grid grid-cols-2 gap-2 md:gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {displayedItems.map((item: ItemType) => (
            <ItemCard key={item._id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SpecificCatogires;