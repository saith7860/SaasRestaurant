import SearchBar from "../SearchBar/SearchBar";

interface MenuHeroProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const MenuHero = ({ search, setSearch }: MenuHeroProps) => {
  return (
    <section className="relative overflow-hidden border-b border-[var(--primary-color)]/10 bg-[var(--background-color)]">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[var(--primary-color)]/10 blur-[140px]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-5 pt-16 text-center">

        <span
          className="
          rounded-full
          border
          border-[var(--primary-color)]/20
          bg-[var(--card-color)]
          px-5
          py-2
          text-sm
          font-semibold
          uppercase
          tracking-[0.25em]
          text-[var(--primary-color)]
        "
        >
          Our Menu
        </span>

        <h1
          className="
          mt-6
          text-3xl
          sm:text-4xl
          font-black
          leading-tight
          text-[var(--text-color)]
          md:text-6xl
        "
        >
          Discover Something Delicious
        </h1>

        <p
          className="
          mt-5
          max-w-2xl
          text-base
          leading-8
          text-[var(--text-color)]/65
          md:text-lg
        "
        >
          Browse every category, search your favorite dishes,
          and order freshly prepared meals in just a few clicks.
        </p>

        <div className="mt-10 w-full">
          <SearchBar
            search={search}
            setSearch={setSearch}
          />
        </div>

      </div>
    </section>
  );
};

export default MenuHero;