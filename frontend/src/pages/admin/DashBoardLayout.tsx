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
    <div className="flex min-h-screen bg-[var(--background-color)] text-[var(--text-color)]">

      {/* Sidebar */}
      <aside className="fixed hidden h-screen w-64 flex-col border-r border-[var(--primary-color)]/15 bg-[var(--card-color)] px-6 py-6 shadow-2xl md:flex">
        <SideBar />
      </aside>

      {/* Main Content */}
      <main className="ml-0 min-h-screen flex-1 overflow-y-auto bg-[var(--background-color)] px-5 py-6 transition-colors duration-300 md:ml-64 md:px-8">
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