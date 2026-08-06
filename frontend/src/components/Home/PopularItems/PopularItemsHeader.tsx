import { Link } from "react-router";
import { ArrowRight } from "lucide-react";


const PopularItemsHeader = () => {
  return (
    <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--primary-color)]">
          Customer Favorites
        </p>

        <h2 className="mt-2 text-3xl font-black text-[var(--text-color)] md:text-5xl">
          Popular Dishes
        </h2>

        <p className="mt-3 max-w-xl text-[var(--text-color)]/60">
          Discover the meals our customers order the most.
        </p>
      </div>

      <Link
        to="/menu"
        className="group w-fit flex gap-2 text-[var(--primary-color)]
        items-center
        rounded-2xl
        border
        border-[var(--primary-color)]/20
        px-5
        py-3
        font-semibold
        transition-all
        duration-300
        hover:bg-[var(--primary-color)]
        hover:text-[var(--background-color)]"
      >
        View All

        <ArrowRight
          size={18}
          className="transition-transform duration-900 group-hover:translate-x-2"
        />
      </Link>
    </div>
  );
};

export default PopularItemsHeader;