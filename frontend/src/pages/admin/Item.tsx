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
  const { items, category, restaurant, branches } = useDashboard();
  console.log(items);
  const deleteItem = async (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this branch?"
    );

    if (!confirmDelete) return
    try {
      const token = localStorage.getItem("token");
      const res = await api.delete(`/api/item/delete-item/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(res.data);
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

    <div className="p-5 flex flex-col gap-5">

      <div className="text-center font-bold sm:font-black text-xl sm:text-2xl md:text-3xl mb-10 " >Manage Items</div>

      <form className="flex flex-col lg:flex-row gap-8 border-2 border-[#F4B400]/30 rounded-lg p-5 mx-3" action="">

        <div className="flex flex-col sm:flex-row items-start justify-start gap-2 mb-5">

          <label htmlFor="category" className="text-[#984447] font-bold text-sm  sm:font-bold md:text-lg " >Select Category : </label>

          <select
            value={selectedCategoryId}
            className="border border-white/30 text-[#F4B400] bg-[#984447] rounded-md px-2 py-1"
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

        <div className="flex flex-col sm:flex-row items-start justify-start gap-2 mb-5 ">

          <label htmlFor="category" className="text-[#984447] font-bold text-sm  sm:font-bold md:text-lg " >Select Branch : </label>

          <select
            value={selectedBranchId}
            className="border border-white/30 text-[#F4B400] bg-[#984447] rounded-md px-2 py-1"
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
          className="flex items-center justify-between border-2 border-[#F4B400]/30 rounded-lg p-5">
          <span>{item.name}</span>

          <div className="flex items-center gap-4">
            <button
              className=" bg-[#984447] hover:bg-[#F4B400] transition text-white py-2 px-4 rounded-md font-semibold text-lg text-center cursor-pointer mt-10 flex justify-center "
              onClick={() => {
                setShowForm(true);
                setEditItem(item)
              }}>Edit</button>

            <button
              className=" bg-[#984447] hover:bg-[#F4B400] transition text-white py-2 px-4 rounded-md font-semibold text-lg text-center cursor-pointer mt-10 flex justify-center"
              onClick={() => deleteItem(item._id)}>Delete</button>
          </div>

        </div>
      ))}

      {showForm && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-2 mx-2">
          <ItemForm setShowForm={setShowForm} item={editItem} category={category} restaurant={restaurant} branches={branches} />
        </div>
      )}

      <button onClick={() => {
        setShowForm(true);
        setEditItem(null);
      }}
        className=" bg-[#984447] hover:bg-[#F4B400] transition text-white py-2 px-4 rounded-md font-semibold text-lg text-center cursor-pointer mt-10 flex justify-center mx-auto"
      >Add Item</button>

    </div>
  )
}

export default Item;