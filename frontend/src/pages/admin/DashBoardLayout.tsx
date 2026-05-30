import { useEffect,useState } from "react";
import api from "../../api/api.js"
import SideBar from "../../components/Admin/SideBar"
import { Outlet } from "react-router"
import { useDashboard } from "../../context/DashBoardContext";
const DashBoardLayout = () => {
  const { setRestaurant, setBranches, setCategory, setItems ,setOrders} = useDashboard();
   const [errors, setErrors] = useState<Record<string, string>>({});
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

          setCategory(
            res.data.result.category
          );

          setItems(
            res.data.result.items
          );
          setOrders(
            res.data.result.orders
          );
        } catch (error) {
          console.log(error);
        }
      };

    fetchDashboardData();
  }, []);


  return (
    <div className="min-h-screen bg-[#171219] text-white flex">

      {/* Sidebar */}
      <aside className="fixed h-full w-64 bg-[#2A2633] border-r border-white/10 shadow-lg hidden md:flex flex-col pl-5 pt-5 text-xl font-bold">
        <SideBar />
      </aside>

      {/* Main Content */}
      <main className="ml-0 md:ml-64 flex-1 p-4 md:p-6 overflow-y-auto ">
        <Outlet />
      </main>

    </div>  
  )
}

export default DashBoardLayout;