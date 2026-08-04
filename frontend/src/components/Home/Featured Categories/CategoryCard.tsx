import { ArrowRight } from "lucide-react";
import type { CategoryType } from "../../../types/DashBoardtype";

interface Props {
  category: CategoryType;
}

const CategoryCard = ({ category }: Props) => {

  const image =
    category.image?.url ??
    "/images/categories/default-category.webp";

  return (

    <div
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-[var(--primary-color)]/10
      bg-[var(--card-color)]
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-[var(--primary-color)]/40
      hover:shadow-2xl
      "
    >

      {/* <div className="overflow-hidden">

        <img
          src={image}
          alt={category.category}

          className="
          h-56
          w-full
          object-cover
          transition-transform
          duration-700
          group-hover:scale-110
          "
        />

      </div> */}

      <div className="p-6">

        <h3 className="text-2xl font-bold text-[var(--text-color)]">

          {category.category}

        </h3>

        <p className="mt-2 text-[var(--text-color)]/60">

          {category.items.length} Items

        </p>

        <div
          className="
          mt-6
          flex
          items-center
          gap-2
          font-semibold
          text-[var(--primary-color)]
          "
        >

          Explore

          <ArrowRight
            size={18}
            className="
            transition-transform
            duration-300
            group-hover:translate-x-2
            "
          />

        </div>

      </div>

    </div>

  );
};

export default CategoryCard;