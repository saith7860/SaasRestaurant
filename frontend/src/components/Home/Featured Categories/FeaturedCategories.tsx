import CategoryHeader from "./CategoryHeader";
import CategoryGrid from "./CategoryGrid";

const FeaturedCategories = () => {
  return (
    <section className="relative py-24 bg-[var(--background-color)] overflow-hidden">

      {/* Background Blur */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[var(--primary-color)]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4">

        <CategoryHeader />

        <CategoryGrid />

      </div>

    </section>
  );
};

export default FeaturedCategories;