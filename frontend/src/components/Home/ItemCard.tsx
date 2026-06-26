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
    <div className="border p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold">{item.name}</h2>

      <p className="text-gray-500 mb-3">{item.description}</p>

      {item.variants && item.variants.length > 0 ? (
        <Variants
          itemId={item._id}
          variants={item.variants}
          selectedVariant={selectedVariant}
          setSelectedVariant={setSelectedVariant}
        />
      ) : (
        <p>Rs {item.basePrice}</p>
      )}

      <AddToCart
        selectedVariant={selectedVariant}
        cart={cart}
        setCart={setCart}
        item={item}
      />
    </div>
  );
};

export default ItemCard;