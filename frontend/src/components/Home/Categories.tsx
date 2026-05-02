import { useEffect, useState } from "react";
import axios from "axios";
import type { CategoriesType } from "../../types/HomePageTypes";
import type { ItemType ,variant} from "../../types/HomePageTypes";
const Categories = () => {
  const [categories, setCategories] = useState<CategoriesType[]>([]);  //list of all categoires
  const [selectedCategory,setSelectedCategory]=useState<string>('Burgers'); //selecting specific castegory and based on that fetch items
  const [items,setItems]=useState<ItemType[]>([]); //storing items of selected category
  const [selectVariant,setSelectVariant]=useState<{[key:string]:variant}>({});
  // const [loading, setLoading] = useState(false);

  const handleClick = (category: string) => {
    console.log("You clicked", category);
    setSelectedCategory(category); 
  };
  const handleVariationChange=(itemID:string,variation:variant)=>{
  setSelectVariant(prev=>({
    ...prev,
    [itemID]:variation
  }));
  }
  console.log(selectVariant);
 

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
  
      { selectedCategory && items.length == 0 && (
        <p>No items in this category</p>
      )}
      <div className="">
        {items.map((item) => (
          <div
            key={item._id}
            className="mb-2"
          >
            {/* <img
              src={item.image}
              alt={item.name}
              className=""
            /> */}

            <h2 className="">{item.name}</h2>
            <p className="">{item.description}</p>
           
            {item.variants.map((variant)=>(
              <div key={`${variant.variation}-${item._id}`}>
            
              <input name={`variant-${item._id}`} checked={selectVariant[item._id]?._id==variant._id} type="radio" id={`${variant.variation}-${variant._id}`} value={variant.variation} onChange={()=>handleVariationChange(item._id,variant)} />
              <label htmlFor={variant.variation}>{variant.variation}</label>
              </div>
              
            ))}
       {selectVariant && <p>Price:{ selectVariant[item._id]?.price||'Select Variant'}</p>}
           <button >Add to Cart</button> 
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Categories;