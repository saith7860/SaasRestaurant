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
  const [filteredItems,setFilteredItems]=useState<ItemType[]>([]);
  const { items, category, restaurant ,branches} = useDashboard();
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
 
  useEffect(()=>{
    if(selectedCategoryId&&selectedBranchId){
     setFilteredItems(items.filter((item)=>item.categoryId==selectedCategoryId&&item.branchId==selectedBranchId));
     
    }
  },[selectedCategoryId,selectedBranchId])
  return (
    <div>
      <form action="">
        <div>
          
          <select
            value={selectedCategoryId}
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
        <div>
          
          <select
            value={selectedBranchId}
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
        <div key={item._id}>
          <div>{item.name}</div>
          <button onClick={() => {
            setShowForm(true);
            setEditItem(item)
          }}>Edit</button>
          <button onClick={() => deleteItem(item._id)}>Delete</button>
        </div>
      ))}
      {showForm && (
        <div>
          <ItemForm setShowForm={setShowForm} item={editItem} category={category} restaurant={restaurant} branches={branches}/>
        </div>
      )}
      <button onClick={() => {
        setShowForm(true);
        setEditItem(null);
      }}>Add Item</button>
    </div>
  )
}

export default Item;