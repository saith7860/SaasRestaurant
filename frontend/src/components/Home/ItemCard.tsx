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
    <div className="group flex flex-col h-full overflow-hidden rounded-2xl bg-[var(--card-color)] border border-[var(--primary-color)]/15 shadow-lg hover:border-[var(--primary-color)]/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

      <div className="w-full h-40 sm:h-44 lg:h-52 xl:h-60 overflow-hidden rounded-t-2xl">

     <img src={item?.image?.url||null} alt={item.name}  
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div> 

      <div className="flex flex-col flex-1 p-4">

        <h2 className="text-lg sm:text-xl font-bold text-[var(--primary-color)] tracking-wide leading-tight">
          {item.name}
        </h2>

        <p className="mt-2 text-sm leading-6 text-[var(--text-color)]/70 line-clamp-2">
          {item.description}
        </p>


        {item.variants && item.variants.length > 0 ? (
          <Variants
            itemId={item._id}
            variants={item.variants}
            selectedVariant={selectedVariant}
            setSelectedVariant={setSelectedVariant}
          />
        ) : (
          <p className="mt-auto py-3 text-xl font-bold text-[var(--primary-color)]">
              Rs {item.basePrice}
          </p>
        )}

        <span className="flex-1"></span>


       
          <AddToCart
            selectedVariant={selectedVariant}
            cart={cart}
            setCart={setCart}
            item={item}
          />
      
      </div>
    </div>
  );
};

export default ItemCard;