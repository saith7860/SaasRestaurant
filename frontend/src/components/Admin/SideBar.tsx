
import { Link } from "react-router"
const SideBar = () => {
  return (
    <div>
      <ul>
        <Link to="restaurant"><li>Resturant</li></Link>
        <Link to="branches"><li>Branches</li></Link>
        <Link to="categories"><li>Categories</li></Link>
        <Link to="items"><li>Items</li></Link>
        <Link to="orders"><li>Orders</li></Link>
      </ul>
    </div>
  )
}

export default SideBar;