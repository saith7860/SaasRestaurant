import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const CategoryHeader = () => {
  return (
    <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

      <div>

        <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--primary-color)]">
          Categories
        </span>

        <h2 className="mt-3 text-4xl font-black tracking-tight text-[var(--text-color)]">
           Explore Categories
        </h2>

        <p className="mt-4 max-w-xl text-lg text-[var(--text-color)]/65">
          Explore our carefully crafted menu, from juicy burgers to refreshing drinks.
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

export default CategoryHeader;