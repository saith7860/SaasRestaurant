import { useEffect, useState } from "react";
import axios from "axios";
import type { CategoriesType } from "../../types/HomePageTypes";
import type { ItemType } from "../../types/HomePageTypes";
const Categories = () => {
  const [categories, setCategories] = useState<CategoriesType[]>([]);
  const [selectedCategory,setSelectedCategory]=useState<string>('Sweets');
  const [items,setItems]=useState<ItemType[]>([]);
  // const [loading, setLoading] = useState(false);

  const handleClick = (category: string) => {
    console.log("You clicked", category);
    setSelectedCategory(category); 
  };
  useEffect(() => {
    const fetchItems=async()=>{
    try {
      const res=await axios.get(`/api/menu/category?category=${selectedCategory}`);
      const itemsArray=res.data.data.items;
      setItems(itemsArray);
      
    } catch (error) {
      console.log('error is fetching specific category items',error);
      
      setItems([]);
    }}
    fetchItems()
  }, [selectedCategory])
  
  
  // Fetch categories (your existing code)
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("/api/menu");
        setCategories(res.data.data);
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    };

    fetchCategories();
  }, []);

  // 🔥 Fetch items when category changes
  // useEffect(() => {
  //   if (!selectedCategory) return;

  //   const fetchItems = async () => {
  //     try {
  //       // setLoading(true);
  //       const res = await axios.get(`/api/menu/category?category=${selectedCategory}`);
  //       console.log(res);
        
  //       setItems(res.data.items);
  //     } catch (error) {
  //       console.error("Error fetching items", error);
  //       setItems([]);
  //     }
  //   };

  //   fetchItems();
  // }, [selectedCategory]);

  return (
    <div className="px-4 py-6">
      
      {/* Categories */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide mb-6">
        {categories.map((cat) => (
          <div
            key={cat._id}
            className="flex flex-col justify-center items-center bg-white shadow-md px-3 py-2 hover:scale-105 transition cursor-pointer"
          >
            <button onClick={() => handleClick(cat.category)}>
              {cat.category}
            </button>
          </div>
        ))}
      </div>

      {/* Items Section */}
  
      { selectedCategory && items.length === 0 && (
        <p>No items in this category</p>
      )}
      <div className="">
        {items.map((item) => (
          <div
            key={item._id}
            className=""
          >
            {/* <img
              src={item.image}
              alt={item.name}
              className=""
            /> */}
            <h2 className="">{item.name}</h2>
            <p className="">{item.description}</p>
            
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Categories;