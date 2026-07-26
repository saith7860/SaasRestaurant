import { NavLink, useNavigate } from "react-router";
import api from "../../api/api";
import { clearAccessToken } from "../../api/tokenStore";

import { FaStore, FaLayerGroup, FaUtensils, FaClipboardList, FaSlidersH } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { CiLogout } from "react-icons/ci";



const SideBar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await api.post("/api/user/logout");
    } catch (err) {
      console.error("Logout API error:", err);
    }
    clearAccessToken();
    navigate("/login");
  };

  return (

    <ul className="flex h-full w-full items-center justify-around md:flex-col md:items-stretch md:justify-start md:gap-3">

      <NavLink to="restaurant" className={({ isActive }) =>
        `flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-xl transition-all duration-300 md:flex-row md:justify-start md:gap-4 md:px-4 md:py-3 ${isActive
          ? "bg-[var(--primary-color)]/15 text-[var(--primary-color)]"
          : "text-[var(--text-color)] hover:bg-[var(--secondary-color)]/20 hover:text-[var(--primary-color)]"
        }`
      }>

        <li className="flex flex-row gap-3">
          <span><FaStore className="text-xl md:text-lg" /></span>
          <span className="hidden md:block"> Resturant </span>
        </li>

      </NavLink>

      <NavLink to="branches" className={({ isActive }) =>
        `flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-xl transition-all duration-300 md:flex-row md:justify-start md:gap-4 md:px-4 md:py-3 ${isActive
          ? "bg-[var(--primary-color)]/15 text-[var(--primary-color)]"
          : "text-[var(--text-color)] hover:bg-[var(--secondary-color)]/20 hover:text-[var(--primary-color)]"
        }`
      }>
        <li className="flex flex-row gap-3">
          <span><MdOutlineLocationOn className="text-3xl md:text-lg" /></span>
          <span className="hidden md:block">Branches</span>
        </li>

      </NavLink>

      <NavLink to="categories" className={({ isActive }) =>
        `flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-xl transition-all duration-300 md:flex-row md:justify-start md:gap-4 md:px-4 md:py-3 ${isActive
          ? "bg-[var(--primary-color)]/15 text-[var(--primary-color)]"
          : "text-[var(--text-color)] hover:bg-[var(--secondary-color)]/20 hover:text-[var(--primary-color)]"
        }`
      }>
        <li className="flex flex-row gap-3">
          <span><FaLayerGroup className="text-xl md:text-lg" /></span>
          <span className="hidden md:block">Categories</span>
        </li>

      </NavLink>

      <NavLink to="items" className={({ isActive }) =>
        `flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-xl transition-all duration-300 md:flex-row md:justify-start md:gap-4 md:px-4 md:py-3 ${isActive
          ? "bg-[var(--primary-color)]/15 text-[var(--primary-color)]"
          : "text-[var(--text-color)] hover:bg-[var(--secondary-color)]/20 hover:text-[var(--primary-color)]"
        }`
      }>
        <li className="flex flex-row gap-3">
          <span><FaUtensils className="text-xl md:text-lg" /></span>
          <span className="hidden md:block">Items</span>
        </li>

      </NavLink>

      <NavLink to="orders" className={({ isActive }) =>
        `flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-xl transition-all duration-300 md:flex-row md:justify-start md:gap-4 md:px-4 md:py-3 ${isActive
          ? "bg-[var(--primary-color)]/15 text-[var(--primary-color)]"
          : "text-[var(--text-color)] hover:bg-[var(--secondary-color)]/20 hover:text-[var(--primary-color)]"
        }`
      }>
        <li className="flex flex-row gap-3">
          <span><FaClipboardList className="text-xl md:text-lg" /></span>
          <span className="hidden md:block">Orders</span>
        </li>

      </NavLink>

      <NavLink to="variants" className={({ isActive }) =>
        `flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-xl transition-all duration-300 md:flex-row md:justify-start md:gap-4 md:px-4 md:py-3 ${isActive
          ? "bg-[var(--primary-color)]/15 text-[var(--primary-color)]"
          : "text-[var(--text-color)] hover:bg-[var(--secondary-color)]/20 hover:text-[var(--primary-color)]"
        }`
      }>
        <li className="flex flex-row gap-3"><span>
          <FaSlidersH className="text-xl md:text-lg" /></span>
          <span className="hidden md:block">Variants</span>
        </li>

      </NavLink>

      {/* Logout */}
      <li
        onClick={handleLogout}
        className="hidden  absolute bottom-5 left-5 md:flex items-center  gap-3 rounded-xl border border-red-500/20 px-4 py-3 text-red-300 transition-all duration-300 hover:bg-red-500/10 hover:border-red-500/40 hover:text-red-400"
      >
        <span className="text-lg"><CiLogout /></span>
        <span>Logout</span>
      </li>

    </ul>
  );
};

export default SideBar;