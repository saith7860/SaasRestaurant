import { useDashboard } from "../../context/DashBoardContext";

const Item = () => {
  const {items}=useDashboard();
  return (
    <div>
      {items?.map((item)=>(
        <div>
          <div>{item.name}</div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      ))}
      <button>Add Item</button>
    </div>
  )
}

export default Item