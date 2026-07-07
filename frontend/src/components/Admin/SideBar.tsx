import { Link, useNavigate } from "react-router";
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
    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <div>
      <ul className="flex flex-col gap-3 h-full py-4 pr-4">
        <Link to="restaurant"><li className="flex items-center gap-4 px-4 py-3 rounded-xl text-[var(--text-color)] hover:bg-[var(--secondary-color)]/20 hover:text-[var(--primary-color)] transition-all duration-300 cursor-pointer"> <span><FaStore /></span> Resturant</li></Link>
        <Link to="branches"><li className="flex items-center gap-4 px-4 py-3 rounded-xl text-[var(--text-color)] hover:bg-[var(--secondary-color)]/20 hover:text-[var(--primary-color)] transition-all duration-300 cursor-pointer"> <span><MdOutlineLocationOn /></span> Branches</li></Link>
        <Link to="categories"><li className="flex items-center gap-4 px-4 py-3 rounded-xl text-[var(--text-color)] hover:bg-[var(--secondary-color)]/20 hover:text-[var(--primary-color)] transition-all duration-300 cursor-pointer"> <span><FaLayerGroup /></span> Categories</li></Link>
        <Link to="items"><li className="flex items-center gap-4 px-4 py-3 rounded-xl text-[var(--text-color)] hover:bg-[var(--secondary-color)]/20 hover:text-[var(--primary-color)] transition-all duration-300 cursor-pointer"> <span><FaUtensils /></span> Items</li></Link>
        <Link to="orders"><li className="flex items-center gap-4 px-4 py-3 rounded-xl text-[var(--text-color)] hover:bg-[var(--secondary-color)]/20 hover:text-[var(--primary-color)] transition-all duration-300 cursor-pointer"> <span><FaClipboardList /></span> Orders</li></Link>
        <Link to="variants"><li className="flex items-center gap-4 px-4 py-3 rounded-xl text-[var(--text-color)] hover:bg-[var(--secondary-color)]/20 hover:text-[var(--primary-color)] transition-all duration-300 cursor-pointer"> <span><FaSlidersH /></span> Variants</li></Link>

        {/* Logout */}
        <li
          onClick={handleLogout}
          className="absolute bottom-6 left-4 right-4 flex items-center gap-4 px-4 py-3 rounded-xl text-[var(--primary-color)] hover:bg-red-500/15 hover:text-red-400 transition-all duration-300 cursor-pointer border border-transparent hover:border-red-500/30"
        >
          <span><CiLogout /></span>
          Logout
        </li>
      </ul>
    </div>
  );
};

export default SideBar;