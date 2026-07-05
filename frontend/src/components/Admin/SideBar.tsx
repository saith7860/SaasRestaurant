import { Link, useNavigate } from "react-router";
import api from "../../api/api";
import { clearAccessToken } from "../../api/tokenStore";

import { FaStore , FaLayerGroup , FaUtensils , FaClipboardList , FaSlidersH  } from "react-icons/fa";
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
      <ul>
        <Link to="restaurant"><li className="flex gap-2 items-center justify-start"> <span><FaStore /></span> Resturant</li></Link>
        <Link to="branches"><li className="flex gap-2 items-center justify-start"> <span><MdOutlineLocationOn /></span> Branches</li></Link>
        <Link to="categories"><li className="flex gap-2 items-center justify-start"> <span><FaLayerGroup /></span> Categories</li></Link>
        <Link to="items"><li className="flex gap-2 items-center justify-start"> <span><FaUtensils /></span> Items</li></Link>
        <Link to="orders"><li className="flex gap-2 items-center justify-start"> <span><FaClipboardList /></span> Orders</li></Link>
        <Link to="variants"><li className="flex gap-2 items-center justify-start"> <span><FaSlidersH  /></span> Variants</li></Link>

        {/* Logout */}
        <li
          onClick={handleLogout}
          className="absolute bottom-5 cursor-pointer flex gap-2 items-center justify-start" 
        >
          <span><CiLogout /></span> 
          Logout
        </li>
      </ul>
    </div>
  );
};

export default SideBar;