import { useEffect } from "react";
import SideBar from "../../components/Admin/SideBar";
import { Outlet } from "react-router";
import { useDashboard } from "../../context/DashBoardContext";

import { useNavigate } from "react-router";
import { CiLogout } from "react-icons/ci";
import { logout } from "../../utils/logout";


const DashBoardLayout = () => {
  const {
    refreshDashboardData,
    loading,
    error
  } = useDashboard();

  const navigate = useNavigate();


  useEffect(() => {
    refreshDashboardData();
  }, [refreshDashboardData]);


  return (
    <div className="flex min-h-screen bg-[var(--background-color)] text-[var(--text-color)]">


      <button
        onClick={() => logout(navigate)}
        className="fixed top-4 right-4 z-50 flex h-11 w-11 items-center justify-center rounded-xl border border-red-500/20 bg-[var(--card-color)] text-red-300 shadow-lg transition-all duration-300 hover:bg-red-500/10 hover:text-red-400 md:hidden"
      >
        <CiLogout className="text-xl" />
      </button>

      {/* Sidebar */}
      <aside className="fixed bottom-0 left-0 right-0 z-50 h-16 border-t border-[var(--primary-color)]/10 bg-[var(--card-color)] shadow-2xl md:top-0 md:left-0 md:h-screen md:w-64 md:border-r md:border-t-0 md:px-6 md:py-6">
        <SideBar />
      </aside>


      {/* Main Content */}
      <main className="flex-1 min-h-screen bg-[var(--background-color)] px-5 pt-20 pb-24 md:ml-64 md:px-8 md:pb-6">
        {loading && (
          <div className="mt-20 flex flex-col items-center justify-center gap-4 text-[var(--primary-color)]">

            <div className="h-10 w-10 animate-spin rounded-full border-4 border-[var(--primary-color)] border-t-transparent"></div>
            <p className="text-lg font-semibold">
              Loading dashboard...
            </p>

          </div>
        )}

        {error && (
          <div className="mx-auto mt-20 max-w-lg rounded-xl border border-red-500/20 bg-red-500/10 px-6 py-4 text-center font-medium text-red-300 shadow-lg">
            {error}
          </div>
        )}

        {!loading && !error && <Outlet />}
      </main>

    </div>
  );
};

export default DashBoardLayout;