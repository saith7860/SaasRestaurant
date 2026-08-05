import { useRestaurant } from "../../../context/RestaurantContext";
import CategoryHeader from "./CategoryHeader";
import CategoryPill from "./CategoryPill";

interface Props {
  search: string;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<
    React.SetStateAction<string>
  >;
}

const MenuCategories = ({
  search,
  selectedCategory,
  setSelectedCategory,
}: Props) => {
  const { restaurantData } = useRestaurant();

  const categories =
  restaurantData?.category.filter((category) =>
    category.category
      .toLowerCase()
      .includes(search.toLowerCase())
  ) || [];

  return (
    <section className="py-10">

      <div className="mx-auto max-w-7xl px-4">

        <CategoryHeader />

        <div
          className="
          flex
          gap-3
          overflow-x-auto
          pb-2
          scrollbar-hide
          snap-x
          snap-mandatory
        "
        >
          {/* ALL */}

          <button
            onClick={() => setSelectedCategory("All")}
            className={`
              shrink-0
              rounded-full
              px-5
              py-3
              text-sm
              md:text-base
              font-semibold
              transition-all

              ${selectedCategory === "All"
                ? "bg-[var(--primary-color)] text-white shadow-lg"
                : "bg-[var(--card-color)] border border-[var(--primary-color)]/15 hover:border-[var(--primary-color)]/40"
              }
            `}
          >
            All Items
          </button>

          {categories.map((category) => (
            <CategoryPill
              key={category._id}
              category={category}
              active={selectedCategory === category._id}
              onClick={() =>
                setSelectedCategory(category._id)
              }
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default MenuCategories;  