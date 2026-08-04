import { Search } from "lucide-react";
import type { FC } from "react";
import type { SearchBarProps } from "../../../types/HomePageTypes";

const SearchBar: FC<SearchBarProps> = ({ search, setSearch }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 my-5 mb-10 mx-2 md:mx-4">
      {/* Desktop Search Bar */}
      <div className="flex items-center w-full md:max-w-[70%] justify-right bg-[var(--card-color)] border border-[var(--primary-color)]/20 rounded-xl px-3 py-2 m-2 focus-within:border-[var(--primary-color)] focus-within:ring-2 focus-within:ring-[var(--primary-color)]/20 transition-all">
        <Search size={18} className="text-[var(--primary-color)]/80" />
        <input
          type="text"
          placeholder="Search food..."
          className="w-full bg-transparent px-3 py-1 text-[var(--text-color)] placeholder:text-[var(--text-color)]/40 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        <h2 className="text-2xl font-black text-[var(--text-color)]">
          Search for your favorite food
        </h2>
        <p className="text-sm text-[var(--text-color)]/70">
          Find the best food from our menu and enjoy your meal.
        </p>
      </div>
    </div>
  );
};

export default SearchBar;