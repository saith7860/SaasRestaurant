import type { CategoryType } from "../../../types/DashBoardtype";
import { Link } from "react-router";


interface Props {
  category: CategoryType;
}

const CategoryCard = ({ category }: Props) => {

  // const image =
  //   category.image?.url ??
  //   "/images/categories/default-category.webp";

  return (


    <Link
        to="/menu"
      className="
            shrink-0
            snap-start
            rounded-2xl
            border
            border-[var(--primary-color)]/10
            bg-[var(--card-color)]
            px-4
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-[var(--primary-color)]/40
            hover:shadow-xl
            min-w-[70px]
            sm:min-w-[100px]
            lg:min-w-[140px]
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

      <div className="p-4">

        <h3 className="text-base sm:text-lg lg:text-xl font-bold font-bold text-[var(--text-color)]">

          {category.category}

        </h3>

        <p className="mt-1 text-sm sm:text-base text-[var(--primary-color)]">

          {category.items.length} Items

        </p>

      </div>

    </Link>
      

  );
};

export default CategoryCard;