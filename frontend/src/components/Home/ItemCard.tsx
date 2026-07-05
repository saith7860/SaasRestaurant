import { useContext, useState } from "react";
import type { ItemType } from "../../types/HomePageTypes";
import type { variantType } from "../../types/DashBoardtype";
import { CartContext } from "../../context/CartContext";
import Variants from "./Variants";
import AddToCart from "./AddToCart";

interface ItemCardProps {
  item: ItemType;
}

const ItemCard = ({ item }: ItemCardProps) => {
  const [selectedVariant, setSelectedVariant] = useState<variantType | undefined>();
  const { cart, setCart } = useContext(CartContext);

  return (
    <div className="relative group flex flex-col overflow-hidden rounded-2xl bg-[#2A2633] border border-[#3B3647] shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

      <div className="w-full h-40  sm:h-45 lg:h-55 xl:h-60 2xl:h-90 overflow-hidden">
        <img src={item.image?.url} alt={item.name}
          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-98 group-hover:rounded-2xl"
        />
      </div>

      <div className="px-3 flex flex-col flex-1 p-1">

        <h2 className="pt-2 text-md font-black sm:text-2xl sm:font-bold text-[#F4B400] tracking-wide">{item.name}</h2>

        <p className="text-sm font-light text-gray-300 leading-relaxed mt-2">{item.description}</p>


        {item.variants && item.variants.length > 0 ? (
          <Variants
            itemId={item._id}
            variants={item.variants}
            selectedVariant={selectedVariant}
            setSelectedVariant={setSelectedVariant}
          />
        ) : (
          <p className="py-2 text-md font-bold text-[#984447] mt-auto">Rs {item.basePrice}</p>
        )}

        <button className=" bg-[#984447] text-white font-bold py-2 rounded-lg mt-auto mb-4 hover:bg-[#F4B400] active:bg-[#4CAF50]/60 transition">
          <AddToCart
            selectedVariant={selectedVariant}
            cart={cart}
            setCart={setCart}
            item={item}
          />
        </button>
      </div>
    </div>
  );
};

export default ItemCard;