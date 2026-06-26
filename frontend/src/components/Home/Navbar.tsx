import { Search, ShoppingCart } from "lucide-react";
import type { FC } from "react";
import type { NavbarProps } from "../../types/HomePageTypes";
import { Link } from "react-router";

const Navbar: FC<NavbarProps> = ({ restaurnatName, search, setSearch }) => {
  return (
    <nav className="w-full shadow-md px-4 py-3 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">

        {/* Logo / Restaurant Name */}
        <Link to={"/"}>
          <h1 className="text-xl md:text-2xl font-bold text-[#984447] hover:text-[#F4B400] transition">
            {restaurnatName}
          </h1>
        </Link>

        {/* Desktop Search Bar */}
        <div className="hidden lg:flex items-center border rounded-lg px-2 py-1 w-full max-w-md">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search food..."
            className="outline-none px-2 py-1 w-full text-white bg-transparent"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <Link to={"/cart"}>
            <button className="flex items-center gap-1 border px-3 py-1 rounded-lg text-white hover:bg-[#F4B400]">
              <ShoppingCart size={18} />
              <span className="hidden sm:inline">Cart</span>
            </button>
          </Link>

          <Link to={"/login"}>
            <button className="bg-[#984447] text-white px-4 py-1 rounded-lg hover:bg-[#F4B400]">
              Login
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="mt-3 lg:hidden flex items-center border rounded-lg px-2 py-1">
        <Search size={18} className="text-white" />
        <input
          type="text"
          placeholder="Search food..."
          className="outline-none px-2 py-1 w-full text-white bg-transparent"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </nav>
  );
};

export default Navbar;