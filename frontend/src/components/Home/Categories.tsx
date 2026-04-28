import  { useEffect, useState } from "react";
import axios from "axios";
import type { CategoriesType } from "../../types/HomePageTypes";
const Categories = () => {
  const [categories, setCategories] = useState<CategoriesType[]>([]);
  const handleClick=(id:string)=>{
 console.log('You clicked',id);
 
  }
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("/api/menu");
        console.log(res.data.data);
        
        setCategories(res.data.data);
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="px-4 py-6">
      {/* <h2 className="text-xl font-semibold mb-4">Categories</h2> */}
      {/* Horizontal Scroll */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">

        {categories.map((cat) => (
          <div
            key={cat._id}
            className="min-w:100px flex flex-col justify-center items-center bg-white shadow-md px-3 py-1 hover:scale-105 transition"
          >
           
            <button onClick={()=>handleClick(cat._id)} className="md:text-lg font-medium">{cat.category}</button>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Categories;