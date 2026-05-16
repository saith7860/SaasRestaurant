import SideBar from "../../components/Admin/SideBar"
import { Outlet } from "react-router"
const DashBoardLayout = () => {
  return (
    <div >
        <div className="">
            {/* SideBar */}
            <SideBar/>
        </div>
        <div className="">
            <Outlet/>
        </div>
    </div>
  )
}

export default DashBoardLayout;