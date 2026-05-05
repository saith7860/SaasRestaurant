import { Search, ShoppingCart } from "lucide-react";
import type { FC } from "react";
import  type { NavbarType } from "../../types/HomePageTypes";
import { Link } from "react-router";

const Navbar:FC<NavbarType> = ({restaurnatName}) => {
  return (
    <nav className=" w-full shadow-md px-4 py-3 bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">

        {/* Logo / Restaurant Name */}
        <Link to={"/"}><h1 className="text-xl md:text-2xl font-bold text-green-600">
          {restaurnatName}
        </h1></Link>

        {/* Search Bar */}
        <div className="hidden md:flex items-center border rounded-lg px-2 py-1 w-full max-w-md">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search food..."
            className="outline-none px-2 py-1 w-full"
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Cart */}
         <Link to={"/cart"}>
          <button className="flex items-center gap-1 border px-3 py-1 rounded-lg hover:bg-gray-100">
            <ShoppingCart size={18} />
            <span className="hidden sm:inline">Cart</span>
          </button>
          </Link>
          {/* Login */}
          <button className="bg-green-600 text-white px-4 py-1 rounded-lg hover:bg-green-700">
    
            Login
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="mt-3 md:hidden flex items-center border rounded-lg px-2 py-1">
        <Search size={18} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search food..."
          className="outline-none px-2 py-1 w-full"
        />
      </div>
    </nav>
  );
};

export default Navbar;