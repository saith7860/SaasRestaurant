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
    <div className="mx-5 my-3">
      {/* Hide categories while searching, optional but cleaner */}
      {!search.trim() && (
        <div className="flex gap-4 m-3 mb-8">

          {categories.map((cat: CategoryType) => (
            <button
              key={cat._id}
              className={` ${category?._id == cat._id ? 'bg-[#F4B400] text-black' : 'bg-[#3B3647] text-white'} text-xl font-medium px-4 py-2 rounded-lg hover:bg-[#F4B400]/90 transition`}
              onClick={() => handleCategory(cat)}
            >
              {cat.category}
            </button>
          ))}
        </div>
      )}

      {search.trim() && (
        <h2 className="text-xl font-semibold mb-4">
          Search results for: "{search}"
        </h2>
      )}

      {displayedItems.length === 0 ? (
        <p className="text-gray-500 text-lg">No item found.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-6">
          {displayedItems.map((item: ItemType) => (
            <ItemCard key={item._id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SpecificCatogires;