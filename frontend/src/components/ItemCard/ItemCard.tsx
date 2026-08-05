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
    <div className="group flex h-full flex-col overflow-hidden rounded-3xl bg-[var(--card-color)] border border-[var(--primary-color)]/10 shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-[var(--primary-color)]/40 hover:shadow-2xl">

      <div className="aspect-square w-full overflow-hidden rounded-t-2xl">
        <img
          src={item.image?.url}
          alt={item.name}
          className=" h-full w-full object-cover object-center transition-all duration-700 group-hover:scale-110  " />
      </div>

      <div className="flex flex-1 flex-col p-5 lg:p-6">
        <h2 className="text-base md:text-lg leading-tight line-clamp-1 font-bold text-[var(--primary-color)] ">
          {item.name}
        </h2>

        <p className="text-sm leading-6 line-clamp-1 text-[var(--text-color)]/65 ">
          {item.description}
        </p>


        <span className="flex-1"></span>


        {item.variants && item.variants.length > 0 ? (
          <Variants
            variants={item.variants}
            selectedVariant={selectedVariant}
            setSelectedVariant={setSelectedVariant}
          />
        ) : (
          <p className=" mt-auto py-3 text-xl font-black tracking-tight font-bold text-[var(--primary-color)] ">
            Rs {item.basePrice}
          </p>
        )}


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