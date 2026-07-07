import { Search, ShoppingCart } from "lucide-react";
import type { FC } from "react";
import type { NavbarProps } from "../../types/HomePageTypes";
import { Link } from "react-router";

const Navbar: FC<NavbarProps> = ({ restaurnatName, search, setSearch }) => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-[var(--background-color)]/95 backdrop-blur-lg border-b border-[var(--primary-color)]/15 shadow-lg px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">

        {/* Logo / Restaurant Name */}
        <Link to={"/"}>
          <h1 className="text-xl md:text-2xl font-extrabold tracking-wide text-[var(--primary-color)] hover:text-[var(--text-color)] transition-colors duration-300">
            {restaurnatName}
          </h1>
        </Link>

        {/* Desktop Search Bar */}
        <div className="hidden lg:flex items-center w-full max-w-md bg-[var(--card-color)] border border-[var(--primary-color)]/20 rounded-xl px-3 py-2 focus-within:border-[var(--primary-color)] focus-within:ring-2 focus-within:ring-[var(--primary-color)]/20 transition-all">
          <Search size={18} className="text-[var(--primary-color)]/80" />
          <input
            type="text"
            placeholder="Search food..."
            className="w-full bg-transparent px-3 py-1 text-[var(--text-color)] placeholder:text-[var(--text-color)]/40 outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link to={"/cart"}>
            <button className="flex items-center gap-2 bg-[var(--card-color)] border border-[var(--primary-color)]/20 text-[var(--text-color)] px-4 py-2 rounded-xl hover:bg-[var(--primary-color)] hover:text-[var(--background-color)] hover:border-[var(--primary-color)] transition-all duration-300">
              <ShoppingCart size={18} />
              <span className="hidden sm:inline">Cart</span>
            </button>
          </Link>

          <Link to={"/login"}>
            <button className="bg-[var(--button-color)] text-[var(--button-text-color)] px-5 py-2 rounded-xl font-semibold hover:bg-[var(--primary-color)] hover:text-[var(--background-color)] shadow-md hover:shadow-lg transition-all duration-300">              Login
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="mt-4 lg:hidden flex items-center bg-[var(--card-color)] border border-[var(--primary-color)]/20 rounded-xl px-3 py-2 focus-within:border-[var(--primary-color)] focus-within:ring-2 focus-within:ring-[var(--primary-color)]/20 transition-all">
        <Search size={18} className="text-[var(--primary-color)]/80" />
        <input
          type="text"
          placeholder="Search food..."
          className="w-full bg-transparent px-3 py-1 text-[var(--text-color)] placeholder:text-[var(--text-color)]/40 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </nav>
  );
};

export default Navbar;