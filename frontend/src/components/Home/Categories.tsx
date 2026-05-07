import { useContext, useEffect, useState } from "react";
import axios from "axios";
import type { CategoriesType } from "../../types/HomePageTypes";
import type { ItemType ,variant} from "../../types/HomePageTypes";
import { CartContext } from "../../CartContext";
const Categories = () => {
  const [categories, setCategories] = useState<CategoriesType[]>([]);  //list of all categoires
  const [selectedCategory,setSelectedCategory]=useState<string>('Burgers'); //selecting specific castegory and based on that fetch items
  const [items,setItems]=useState<ItemType[]>([]); //storing items of selected category
  const [selectVariant,setSelectVariant]=useState<{[key:string]:variant}>({});
  // const [loading, setLoading] = useState(false);
     const {cart,setCart}=useContext(CartContext)!;   
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
  const handleAddToCart=(selectedVariant:any,fullItem:ItemType)=>{
  
      if (selectedVariant!==undefined||selectedVariant!==null) {
   
      console.log(selectedVariant);
      console.log(fullItem);
      const existing=cart.find((item)=>item.id==selectedVariant._id && selectedVariant.variation==item.variation)
      if (existing) {
        const updatedCart = cart.map((item) =>
      item.id === selectedVariant._id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCart(updatedCart);
      } 
      else{
        const newItem={
          id:selectedVariant._id,
          name:fullItem.name,
          image:fullItem.image,
          variantId:selectedVariant._id,
          variation:selectedVariant.variation,
          price:selectedVariant.price,
          quantity:1
        }
        setCart([...cart,newItem])
      }
      }
    
    

   
  }
 
 console.log(cart);
 

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

      <div className="flex gap-6 overflow-x-auto scrollbar-hide mb-6 whitespace-nowrap">
          {categories.map((cat) => (
            <button
              key={cat._id}
              onClick={() => handleClick(cat.category)}
              className={`
                relative pb-2 text-sm font-semibold transition-all duration-200
                active:scale-95

                ${
                  selectedCategory === cat.category
                    ? "text-[#F4B400]"
                    : "text-white"
                }
              `}
            >
              {cat.category}

              {/* Active Underline */}
              {selectedCategory === cat.category && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#F4B400] rounded-full"></span>
              )}
            </button>
          ))}
      </div>

      {/* Items Section */}
  
      { selectedCategory && items.length == 0 && (
        <p className="text-[#F4B400] m-auto p-4 text-xl font-bold">No items in this category</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item._id}
            className="mb-2 p-4 text-white bg-[#2A2633] rounded-lg shadow-md flex flex-col gap-2"
          >
            {/* <img
              src={item.image}
              alt={item.name}
              className=""
            /> */}

            <h2 className="text-[#F4B400] font-black text-xl">{item.name}</h2>
            <p className="text-white">{item.description}</p>
           
            {item.variants.map((variant)=>(
              <div key={`${variant.variation}-${item._id}`} className="flex gap-2">
            
                <input name={`variant-${item._id}`} checked={selectVariant[item._id]?._id==variant._id} type="radio"   className="accent-[#984447]" id={`${variant.variation}-${variant._id}`} value={variant.variation} onChange={()=>handleVariationChange(item._id,variant)}/>
                <label htmlFor={variant.variation}>{variant.variation}</label>
              
              </div>
              
            ))}
       {selectVariant && <p className="text-[#F4B400] font-bold text-lg" >Rs : { selectVariant[item._id]?.price||'Select Variant'}</p>}
         <button onClick={()=>handleAddToCart(selectVariant[item._id],item)} className="bg-[#984447] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#F4B400] active:bg-[#4CAF50]/60 transition" >Add to Cart</button>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Categories;