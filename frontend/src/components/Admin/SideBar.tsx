import { Link, useNavigate } from "react-router";

const SideBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 1. Remove auth data
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // 2. Redirect to login
    navigate("/login");
  };

  return (
    <div>
      <ul>
        <Link to="restaurant"><li>Resturant</li></Link>
        <Link to="branches"><li>Branches</li></Link>
        <Link to="categories"><li>Categories</li></Link>
        <Link to="items"><li>Items</li></Link>
        <Link to="orders"><li>Orders</li></Link>
        <Link to="variants"><li>Variants</li></Link>

        {/* Logout */}
        <li
          onClick={handleLogout}
          className="absolute bottom-5 cursor-pointer"
        >
          Logout
        </li>
      </ul>
    </div>
  );
};

export default SideBar;