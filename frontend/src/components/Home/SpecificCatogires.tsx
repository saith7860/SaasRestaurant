import { useContext, useEffect, useState } from "react";
import { useRestaurant } from "../../context/RestaurantContext";
import type { CategoryType, variantType } from "../../types/DashBoardtype";
import type { ItemType } from "../../types/HomePageTypes";
import { CartContext } from "../../context/CartContext";
import Variants from "./Variants";
import AddToCart from "./AddToCart";
const SpecificCatogires = () => {
  const [category, setCategory] = useState<CategoryType | null>(null);
  const [items, setItems] = useState<ItemType[]>([]);
   const [selectedVariant,setSelectedVariants] = useState<variantType | undefined>();
  const { restaurantData } = useRestaurant();
  const {cart,setCart} =useContext(CartContext);
  const categories = restaurantData?.category;
 //setting cateogory bassed on user click
  const handleCateogory = (category: CategoryType) => {
    setCategory(category);
  };

  // first category pre-selected
  useEffect(() => {
    if (categories?.length > 0 && !category) {
      setCategory(categories[0]);
    }
  }, [categories]);

  // // populate items of selected category
  useEffect(() => {
    if (!category || !restaurantData?.items) return;

    const filteredItems = restaurantData.items.filter(
      (item) =>
        category.items.includes(item._id)
    );

    setItems(filteredItems);
  }, [category, restaurantData]);
  console.log(items);
  
  
  return (
    <div>
      <div className="flex gap-4 mb-5">
        {categories?.map((category: CategoryType) => (
          <button
            key={category._id}
            className="text-[#F4B400] text-xl"
            onClick={() => handleCateogory(category)}
          >
            {category.category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map((item) => {
   
    return (
      <div
        key={item._id}
        className="border p-4 rounded-lg shadow"
      >
        <h2 className="text-xl font-bold">
          {item.name}
        </h2>

        <p className="text-gray-500 mb-3">
          {item.description}
        </p>
      {item.variants?.length>0?<Variants variant={item.variants} selectedVariant={selectedVariant} setSelectedVariants={setSelectedVariants}/>:<p>Rs {item.basePrice}</p>}

      <AddToCart selectedVariant={selectedVariant} cart={cart} setCart={setCart} item={item}/>
      </div>
    );
  })}
</div>
    </div>
  );
};

export default SpecificCatogires;