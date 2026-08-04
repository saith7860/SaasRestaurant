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
          Browse by Category
        </h2>

        <p className="mt-4 max-w-xl text-lg text-[var(--text-color)]/65">
          Explore our carefully crafted menu, from juicy burgers to refreshing drinks.
        </p>

      </div>

      <Link
        to="/menu"
        className="group flex items-center gap-2 font-semibold text-[var(--primary-color)]"
      >
        View All

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>

    </div>
  );
};

export default CategoryHeader;