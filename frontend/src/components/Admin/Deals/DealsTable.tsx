import { useState } from "react";
import DealCard from "./DealCard";
import DealForm from "./DealForm";
import { useDashboard } from "../../../context/DashBoardContext";

const DealsTable = () => {
  const { deals, refreshDashboardData } = useDashboard();

  const [editingDeal, setEditingDeal] = useState<any>(null);

  // -----------------------------
  // Delete
  // -----------------------------
  const handleDelete = async (dealId: string) => {
    // DealCard already performs the API delete.
    // Here we refresh the dashboard so the deleted deal disappears.
    try {
      await refreshDashboardData();
    } catch (error) {
      console.error("Failed to refresh deals:", error);
    }
  };

  // -----------------------------
  // Edit
  // -----------------------------
  const handleEdit = (deal: any) => {
    console.log("Editing deal:", deal);

    setEditingDeal(deal);
  };

  // -----------------------------
  // If editing
  // -----------------------------
  if (editingDeal) {
    return (
      <DealForm
        deal={editingDeal}
        onCancel={() => setEditingDeal(null)}
      />
    );
  }

  // -----------------------------
  // No deals
  // -----------------------------
  if (!deals || deals.length === 0) {
    return (
      <div className="flex min-h-[400px] items-center justify-center rounded-2xl border border-[var(--primary-color)]/10 bg-[var(--card-color)]">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--primary-color)]/10 text-3xl">
            🎁
          </div>

          <h2 className="mt-5 text-xl font-bold">
            No Deals Found
          </h2>

          <p className="mt-2 text-sm text-[var(--text-color)]/60">
            Create your first restaurant deal.
          </p>
        </div>
      </div>
    );
  }

  // -----------------------------
  // Deals list
  // -----------------------------
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
      {deals.map((deal: any) => (
        <DealCard
          key={deal._id}
          deal={deal}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default DealsTable;