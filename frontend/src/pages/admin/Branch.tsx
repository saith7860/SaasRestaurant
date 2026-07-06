import api from "../../api/api.js";
import { useState } from "react"
import { useDashboard } from "../../context/DashBoardContext"
import BranchForm from "../../components/Admin/BranchForm";
import type { BranchType } from "../../types/DashBoardtype.js"
const Branch = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState<BranchType | null>(null);
  const { branches, setBranches, refreshDashboardData } = useDashboard();
  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this branch?"
    );

    if (!confirmDelete) return
    try {
      await api.delete(`/api/branch/delete-branch/${id}`)
      setBranches(branches.filter((branch) => branch._id !== id));
      await refreshDashboardData();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>

      <div className="mb-8 text-center text-2xl font-extrabold tracking-wide text-[var(--primary-color)] sm:text-3xl" >Branches</div>

      {branches?.map((branch) => (
        <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-[var(--primary-color)]/20 bg-[var(--card-color)] p-6 shadow-lg transition-all duration-300 hover:border-[var(--primary-color)]/40 hover:shadow-xl" key={branch._id}>

          <div className="flex flex-wrap items-center gap-2 text-[var(--text-color)]">
            <h4 className="min-w-32 font-semibold text-[var(--primary-color)]">
              Name:
            </h4>
            {branch.name}
          </div>

          <div className="flex flex-wrap items-center gap-2 text-[var(--text-color)]">
            <h4 className="min-w-32 font-semibold text-[var(--primary-color)]">
              Address:
            </h4>
            {branch.address}
          </div>

          <div className="flex flex-wrap items-center gap-2 text-[var(--text-color)]">
            <h4 className="min-w-32 font-semibold text-[var(--primary-color)]">

              City:
            </h4>
            {branch.city}
          </div>
          
          <div className="flex flex-wrap items-center gap-2 text-[var(--text-color)]">
            <h4 className="min-w-32 font-semibold text-[var(--primary-color)]">

              Contact Number:
            </h4>
            {branch.contactNumber}
          </div>
          
          <div className="flex flex-wrap items-center gap-2 text-[var(--text-color)]">
            <h4 className="min-w-32 font-semibold text-[var(--primary-color)]">

              Opening Time:
            </h4>
            {branch.openingTime}
          </div>
          
          <div className="flex flex-wrap items-center gap-2 text-[var(--text-color)]">
            <h4 className="min-w-32 font-semibold text-[var(--primary-color)]">

              Closing Time:
            </h4>
            {branch.closingTime}
          </div>
          
          <div className="flex flex-wrap items-center gap-2 text-[var(--text-color)]">
            <h4 className="min-w-32 font-semibold text-[var(--primary-color)]">

              Delivery Fee:
            </h4>
            {branch.deliveryFee}
          </div>

          <div className="mt-4 flex items-center justify-end gap-3 border-t border-white/10 pt-5">

            <div className="rounded-xl bg-[var(--button-color)] px-5 py-2.5 text-[var(--button-text-color)] shadow transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--primary-color)] hover:text-[var(--background-color)] active:scale-95">
              <button onClick={() => {
                setShowForm(true);
                setSelectedBranch(branch)
              }}>Edit</button>
            </div>

            <div className="rounded-xl border border-red-500/20 px-5 py-2.5 text-red-400 transition-all duration-200 hover:bg-red-500/10 hover:text-red-300 active:scale-95">
              <button onClick={() => {
                handleDelete(branch._id)
              }}>Delete</button>
            </div>
          </div>
        </div>
      ))}


      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
          <BranchForm setShowForm={setShowForm} branch={selectedBranch} />
        </div>
      )}

      <button className="mx-auto mt-8 flex justify-center rounded-xl bg-[var(--button-color)] px-8 py-3 text-lg font-semibold text-[var(--button-text-color)] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--primary-color)] hover:text-[var(--background-color)] active:scale-95" onClick={() => {
        setSelectedBranch(null);
        setShowForm(true)
      }}>Add Branch</button>

    </div>
  )
}

export default Branch;