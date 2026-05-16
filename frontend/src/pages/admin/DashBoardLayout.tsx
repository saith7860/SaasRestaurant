import { useEffect } from "react";
import api from "../../api/api.js"
import SideBar from "../../components/Admin/SideBar"
import { Outlet } from "react-router"
import { useDashboard } from "../../context/DashBoardContext";
const DashBoardLayout = () => {
     const {setRestaurant,setBranches,setCategories,setItems}=useDashboard();
     useEffect(() => {
    const fetchDashboardData =
      async () => {
        try {
          const token =
            localStorage.getItem("token");

          const res = await api.get(
            "/api/resturant/admin/dashboard",
            {
              headers: {
                Authorization:
                  `Bearer ${token}`
              }
            }
          );
        console.log(res.data.result);
        

          setRestaurant(
            res.data.result.resuturant
          );

          setBranches(
            res.data.result.branches
          );

          setCategories(
            res.data.result.categories
          );

          setItems(
            res.data.result.items
          );

        } catch (error) {
          console.log(error);
        }
      };

    fetchDashboardData();
  }, []);
   

  return (
    <div className="">
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