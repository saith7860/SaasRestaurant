import { useEffect, useState } from "react";
import { useDashboard } from "../../context/DashBoardContext";
import type { ItemType } from "../../types/DashBoardtype";
import ItemForm from "../../components/Admin/ItemForm";
import api from "../../api/api";

const Item = () => {
  const [showForm, setShowForm] = useState(false);
  const [editItem, setEditItem] = useState<ItemType | null>(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [selectedBranchId, setSelectedBranchId] = useState("");
  const [filteredItems, setFilteredItems] = useState<ItemType[]>([]);
  const { items, category, restaurant, branches, refreshDashboardData } = useDashboard();
  console.log(items);
  const deleteItem = async (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this Item?"
    );

    if (!confirmDelete) return
    try {
      const res = await api.delete(`/api/item/delete-item/${id}`);
      console.log(res.data);
      await refreshDashboardData();
    } catch (error) {
      console.log(error);
    }
  }
  console.log(selectedCategoryId);

  useEffect(() => {
    if (selectedCategoryId && selectedBranchId) {
      setFilteredItems(items.filter((item) => item.categoryId == selectedCategoryId && item.branchId == selectedBranchId));

    }
  }, [selectedCategoryId, selectedBranchId])
  return (

    <div className="flex flex-col gap-8 px-0  py-6 sm:px-6">

      <div className="mb-4 text-center text-2xl font-extrabold tracking-wide text-[var(--primary-color)] sm:text-3xl" >Manage Items</div>

      <form className="mx-3 flex flex-col gap-6 rounded-2xl border border-[var(--primary-color)]/20 bg-[var(--card-color)] p-6 shadow-lg lg:flex-row lg:items-end" action="">

        <div className="flex flex-1 flex-col gap-2">

          <label htmlFor="category" className="text-sm font-semibold text-[var(--primary-color)] md:text-base" >Select Category : </label>

          <select
            value={selectedCategoryId}
            className="w-full rounded-lg border border-white/10 bg-[var(--background-color)] px-4 py-3 text-[var(--text-color)] outline-none transition-all duration-200 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/20"
            onChange={(e) => setSelectedCategoryId(e.target.value)}
          >
            <option value="">Select a Category</option>
            {category?.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.category}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-1 flex-col gap-2">

          <label htmlFor="branch" className="text-sm font-semibold text-[var(--primary-color)] md:text-base" >Select Branch : </label>

          <select
            value={selectedBranchId}
            className="w-full rounded-lg border border-white/10 bg-[var(--background-color)] px-4 py-3 text-[var(--text-color)] outline-none transition-all duration-200 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/20"
            onChange={(e) => setSelectedBranchId(e.target.value)}
          >
            <option value="">Select a Branch</option>
            {branches?.map((branch) => (
              <option key={branch._id} value={branch._id}>
                {branch.name}
              </option>
            ))}
          </select>
        </div>

      </form>


      {filteredItems?.map((item) => (

        <div key={item._id}
          className="flex flex-col gap-5 rounded-2xl border border-[var(--primary-color)]/20 bg-[var(--card-color)] p-6 shadow-lg transition-all duration-300 hover:border-[var(--primary-color)]/40 hover:shadow-xl sm:flex-row sm:items-center sm:justify-between">
          
          <span className="text-lg font-semibold text-[var(--text-color)]">
            {item.name}
          </span>
          
          <div className="flex items-center gap-3">
            <button
              className="rounded-xl bg-[var(--button-color)] px-5 py-2.5 font-semibold text-[var(--button-text-color)] shadow transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--primary-color)] hover:text-[var(--background-color)] active:scale-95"
              onClick={() => {
                setShowForm(true);
                setEditItem(item);
              }}>Edit</button>

            <button
              className="rounded-xl border border-red-500/20 px-5 py-2.5 font-semibold text-red-400 transition-all duration-200 hover:bg-red-500/10 hover:text-red-300 active:scale-95"
              onClick={() => deleteItem(item._id)}>Delete</button>
          </div>

        </div>
      ))}

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
          <ItemForm setShowForm={setShowForm} item={editItem} category={category} restaurant={restaurant} branches={branches} />
        </div>
      )}

      <button onClick={() => {
        setShowForm(true);
        setEditItem(null);
      }}
        className="mx-auto mt-6 rounded-xl bg-[var(--button-color)] px-8 py-3 text-lg font-semibold text-[var(--button-text-color)] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--primary-color)] hover:text-[var(--background-color)] active:scale-95"
      >Add Item</button>

    </div>
  )
}

export default Item;