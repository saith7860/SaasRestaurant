import { useContext, useEffect, useState } from "react";
import { useRestaurant } from "../../context/RestaurantContext";
import type { CategoryType } from "../../types/DashBoardtype";
import type { ItemType } from "../../types/HomePageTypes";
import { CartContext } from "../../context/CartContext";
import { toast } from "react-toastify";
const SpecificCatogires = () => {
  const [category, setCategory] = useState<CategoryType | null>(null);
  const [items, setItems] = useState<ItemType[]>([]);
  const [selectedVariants,setSelectedVariants] = useState<{
  [key: string]: string;
}>({});
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

  // populate items of selected category
  useEffect(() => {
    if (!category || !restaurantData?.items) return;

    const filteredItems = restaurantData.items.filter(
      (item: ItemType) =>
        category.items.includes(item._id)
    );

    setItems(filteredItems);
  }, [category, restaurantData]);
//handle variation
const handleVariantSelect = (
  itemId: string,
  variation: string
) => {
  setSelectedVariants((prev) => ({
    ...prev,
    [itemId]: variation,
  }));
};
  console.log(items);
  const handleAddToCart = (selectedVariant: any, fullItem: ItemType) => {
    if (!selectedVariant) {
      toast.error("Please select a variant");

      return;
    }
   
     console.log(selectedVariant);
      console.log(fullItem);
      const existing = cart.find((item) => item.id == selectedVariant._id && selectedVariant.variation == item.variation)
      if (existing) {
        const updatedCart = cart.map((item) =>
          item.id === selectedVariant._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        setCart(updatedCart);
      }
      else {
        const newItem = {
          id: selectedVariant._id,
          name: fullItem.name,
          image: fullItem.image,
          variantId: selectedVariant._id,
          variation: selectedVariant.variation,
          price: selectedVariant.price,
          quantity: 1
        }
        setCart([...cart, newItem])

      }
    


    toast.success("Items added to cart")

  }
  console.log(cart);
  
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

      {/* show items */}
      {/* <ShowItems items={items}/> */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item._id} className="border p-4 rounded">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Rs {item.basePrice}</p>
          </div>
        ))}
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map((item) => {
    const hasVariants =
      item.variants && item.variants.length > 0;

    // selected variant object
    const selectedVariant = item.variants?.find(
      (variant) =>
        variant.variation ===
        selectedVariants[item._id]
    );

    // dynamic price
    const currentPrice = selectedVariant? ` ${selectedVariant.price}`:item.basePrice

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

        {/* Variants */}
        {hasVariants ? (
          <div className="space-y-2 mb-4">
            <h3 className="font-semibold">
              Choose Size
            </h3>

            {item.variants.map((variant) => (
              <label
                key={variant._id}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name={`variant-${item._id}`}
                  value={variant.variation}
                  checked={
                    selectedVariants[item._id] ===
                    variant.variation
                  }
                  onChange={() =>
                    handleVariantSelect(
                      item._id,
                      variant.variation
                    )
                  }
                />

                <span>
                  {variant.variation}
                </span>

                <span className="text-gray-500">
                  Rs {variant.price}
                </span>
              </label>
            ))}
          </div>
        ) : null}

        {/* Price */}
        <h3 className="text-lg font-bold mb-3">
          Rs {currentPrice}
        </h3>

        <button className="bg-yellow-500 px-4 py-2 rounded text-white w-full" onClick={()=>handleAddToCart(selectedVariants[item._id],item)}>
          Add To Cart
        </button>
      </div>
    );
  })}
</div>
    </div>
  );
};

export default SpecificCatogires;