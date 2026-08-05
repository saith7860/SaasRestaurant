import { SlidersHorizontal } from "lucide-react";

const CategoryHeader = () => {
  return (
    <div className="mb-5">

      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--primary-color)]">
        Browse By
      </p>

      <h2 className="mt-1 text-2xl font-black text-[var(--text-color)] md:text-3xl">
        Categories
      </h2>

    </div>
  );
};

export default CategoryHeader;