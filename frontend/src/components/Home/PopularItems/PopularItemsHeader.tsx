import { Link } from "react-router";

const PopularItemsHeader = () => {
  return (
    <div className="mb-10 flex items-end justify-between">

      <div>

        <p className="text-sm uppercase tracking-[0.3em] text-[var(--primary-color)]">
          Popular
        </p>

        <h2 className="mt-2 text-3xl md:text-4xl font-black text-[var(--text-color)]">
          Most Loved Dishes
        </h2>

        <p className="mt-3 max-w-xl text-[var(--text-color)]/65">
          Freshly prepared meals loved by hundreds of happy customers.
        </p>

      </div>

      <Link
        to="/menu"
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

        hover:-translate-y-1

        hover:shadow-lg
        "
      >
        View All →
      </Link>

    </div>
  );
};

export default PopularItemsHeader;