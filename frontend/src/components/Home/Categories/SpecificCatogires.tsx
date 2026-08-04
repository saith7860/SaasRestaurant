import { useEffect, useMemo, useState } from "react";
import { useRestaurant } from "../../../context/RestaurantContext";
import ItemCard from "../ItemCard";
import type { CategoryType } from "../../../types/DashBoardtype";
import type { ItemType } from "../../../types/HomePageTypes";


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

    return allItems.filter((item: any) =>
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
        <section className="mb-12">

          {/* Header */}

          <div className="mb-8 flex items-center justify-between">

            <div>

              <p className="text-sm font-black uppercase tracking-[0.3em] text-[var(--primary-color)]">
                Explore
              </p>

              <h2 className="mt-2 text-3xl md:text-4xl font-black text-[var(--text-color)]">
                Browse Categories
              </h2>

            </div>

            <button
              className="
      hidden
      md:flex

      items-center
      gap-2

      rounded-full

      border

      border-[var(--primary-color)]/10

      bg-[var(--card-color)]

      px-5

      py-3

      text-sm

      transition-all

      duration-300

      hover:border-[var(--primary-color)]

      hover:shadow-lg

      hover:-translate-y-1
      "
            >
              View All Category →
            </button>

          </div>

          {/* Categories */}

          <div
            className="flex gap-4 p-6 overflow-x-auto scrollbar-hide pb-3 " >

            {categories.map((cat) => (

              <button
                key={cat._id}
                onClick={() => handleCategory(cat)}
                className={`
        group
        shrink-0

        rounded-full

        px-7

        py-3

        text-sm
        font-semibold

        transition-all
        duration-300

        ${category?._id === cat._id
                    ? `
              bg-[var(--primary-color)]
              text-[var(--background-color)]
              shadow-xl
              shadow-[var(--primary-color)]/30
              scale-105
            `
                    : `
              bg-[var(--card-color)]
              text-[var(--text-color)]

              border

              border-[var(--primary-color)]/10

              hover:border-[var(--primary-color)]

              hover:-translate-y-1

              hover:shadow-xl
            `
                  }
        `}
              >

                {cat.category}

              </button>

            ))}

          </div>

        </section>
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