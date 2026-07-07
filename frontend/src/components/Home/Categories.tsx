import { useContext, useEffect, useState } from "react";
import api from "../../api/api";
import type { CategoriesProps, CategoriesType } from "../../types/HomePageTypes";
import type { ItemType, variant } from "../../types/HomePageTypes";
import { toast } from "react-toastify";
import { CartContext } from "../../context/CartContext";
import ShowItems from "./ShowItems";
const Categories = ({ search }: { search: string }) => {
  const [categories, setCategories] = useState<CategoriesType[]>([]);  //list of all categoires
  const [selectedCategory, setSelectedCategory] = useState<string>('Desi Foods'); //selecting specific castegory and based on that fetch items
  const [items, setItems] = useState<ItemType[]>([]); //storing items of selected category
  const [selectVariant, setSelectVariant] = useState<{ [key: string]: variant }>({});
  const [loading, setLoading] = useState(false);
  const { cart, setCart } = useContext(CartContext)!;



  const handleClick = (category: string) => {
    console.log("You clicked", category);
    setSelectedCategory(category);
  };
  const handleVariationChange = (itemID: string, variation: variant) => {
    setSelectVariant(prev => ({
      ...prev,
      [itemID]: variation
    }));
  }
  const handleAddToCart = (selectedVariant: any, fullItem: ItemType) => {
    if (!selectedVariant) {
      toast.error("Please select a variant");

      return;
    }
    if (selectedVariant !== undefined && selectedVariant !== null) {

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
    }


    toast.success("Items added to cart")

  }

  console.log(cart);


  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true)
        const res = await api.get(`/api/menu/category?category=${selectedCategory}`);
        const itemsArray = res.data.data.items;
        setItems(itemsArray);

      } catch (error) {
        console.log('error is fetching specific category items', error);

        setItems([]);
      } finally {
        setLoading(false)
      }
    }
    fetchItems()
  }, [selectedCategory])



  useEffect(() => {

    const fetchCategories = async () => {
      try {
        const res = await api.get("/api/menu");
        setCategories(res.data.data);
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    };

    fetchCategories();
  }, []);
  if (loading) {
    return (
      <div className="flex items-center justify-center h-40">
        <div className="w-10 h-10 rounded-full border-4 border-[var(--primary-color)] border-t-transparent animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Categories */}
      <div className="flex gap-3 overflow-x-auto scrollbar-hide whitespace-nowrap rounded-2xl bg-[var(--card-color)] p-3 mb-8 border border-[var(--primary-color)]/15 shadow-lg">
        {categories.map((cat) => (
          <button
            key={cat._id}
            onClick={() => handleClick(cat.category)}

            className={`relative rounded-xl px-5 py-2 text-sm font-semibold transition-all duration-300 active:scale-95 
              ${selectedCategory === cat.category ? "bg-[var(--primary-color)] text-[var(--background-color)] shadow-lg" : "bg-transparent text-[var(--text-color)] hover:bg-[var(--secondary-color)]/20 hover:text-[var(--primary-color)]"}`}

          >
            {cat.category}

            {/* Active Underline */}
            {selectedCategory === cat.category && (
              <span className="absolute left-3 right-3 -bottom-1 h-1 rounded-full bg-[var(--primary-color)]"></span>
            )}
          </button>
        ))}
      </div>

      {/* Items Section */}
      {/*   
      { selectedCategory && items.length == 0 && (
        <p className="text-[#F4B400] m-auto p-4 text-xl font-bold">No items in this category</p>
      )} */}

      <ShowItems items={items} />

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
        {items.map((item) => (

          <div
            key={item._id}
            className="group flex flex-col justify-between rounded-2xl border border-[var(--primary-color)]/15 bg-[var(--card-color)] p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary-color)] hover:shadow-2xl">


            <h2 className="text-xl font-bold tracking-wide text-[var(--primary-color)]">{item.name}</h2>
            <p className="mt-2 text-sm leading-6 text-[var(--text-color)]/70">{item.description}</p>

            {selectVariant && <p className="mt-4 text-xl font-bold text-[var(--primary-color)]">Rs : {selectVariant[item._id]?.price || 'Select Variant'}</p>}
            
            {item.variants.map((variant) => (
              <div key={`${variant.variation}-${item._id}`}
                className="flex items-center gap-3 rounded-xl border border-[var(--primary-color)]/10 bg-[var(--background-color)] px-3 py-2 transition-all duration-300 hover:border-[var(--primary-color)]/40 hover:bg-[var(--secondary-color)]/10">

                <input
                  name={`variant-${item._id}`}
                  checked={selectVariant[item._id]?._id == variant._id}
                  type="radio"
                  className="accent-[var(--primary-color)] w-4 h-4"
                  id={`${variant.variation}-${variant._id}`}
                  value={variant.variation}
                  onChange={() => handleVariationChange(item._id, variant)} />

                <label htmlFor={variant.variation} className="cursor-pointer text-sm font-medium text-[var(--text-color)]">{variant.variation}</label>

              </div>

            ))}

            <button onClick={() => handleAddToCart(selectVariant[item._id], item)}
              className="mt-4 w-full rounded-xl bg-[var(--button-color)] py-3 px-4 font-semibold text-[var(--button-text-color)] shadow-md transition-all duration-300 hover:bg-[var(--primary-color)] hover:text-[var(--background-color)] hover:shadow-xl active:scale-[0.98]" >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Categories;