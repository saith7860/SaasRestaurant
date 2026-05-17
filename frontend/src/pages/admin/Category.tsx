import { useDashboard } from "../../context/DashBoardContext";


const Category = () => {
    const {categories}=useDashboard();
  return (
    <div>
    {categories?.map((category)=>(
        <div>
            <div>{category.category}</div>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    ))}
    <button>Add Category</button>
    </div>
  )
}

export default Category