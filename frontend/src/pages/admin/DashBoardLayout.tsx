import { useEffect } from "react";
import SideBar from "../../components/Admin/SideBar";
import { Outlet } from "react-router";
import { useDashboard } from "../../context/DashBoardContext";

const DashBoardLayout = () => {
  const {
    refreshDashboardData,
    loading,
    error
  } = useDashboard();

  useEffect(() => {
    refreshDashboardData();
  }, [refreshDashboardData]);

  return (
    <div className="min-h-screen bg-[#171219] text-white flex">

      {/* Sidebar */}
      <aside className="fixed h-full w-64 bg-[#2A2633] border-r border-white/10 shadow-lg hidden md:flex flex-col pl-5 pt-5 text-xl font-bold">
        <SideBar />
      </aside>

      {/* Main Content */}
      <main className="ml-0 md:ml-64 flex-1 p-4 md:p-6 overflow-y-auto">
        {loading && (
          <div className="text-center text-white mt-10">
            Loading dashboard...
          </div>
        )}

        {error && (
          <div className="text-center text-red-400 mt-10">
            {error}
          </div>
        )}

        {!loading && !error && <Outlet />}
      </main>

    </div>
  );
};

export default DashBoardLayout;