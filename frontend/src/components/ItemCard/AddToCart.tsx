import type { variantType } from "../../types/DashBoardtype";
import type { ItemType } from "../../types/HomePageTypes";
import type { CartItem } from "../../types/CartType";
import { toast } from "react-toastify";
import { Plus } from "lucide-react";

interface AddToCartProps {
  item: ItemType;
  selectedVariant: variantType | undefined;
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  mobile?: boolean;
}


const AddToCart = ({ item, selectedVariant, cart, setCart , mobile = false }: AddToCartProps) => {
  console.log(item, selectedVariant);

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (item.variants.length > 0 && !selectedVariant) {
      toast.error("Please select a variant");
      return;
    }

    const existingItem = cart.find(
      (cartItem) =>
        cartItem.id === item._id &&
        (item.variants.length === 0 ||
          cartItem.variantId === selectedVariant?._id)
    );

    if (existingItem) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item._id &&
          (item.variants.length === 0 ||
            cartItem.variantId === selectedVariant?._id)
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );

      setCart(updatedCart);
      toast.success(`${item.name} Quantity updated`);
    } else {
      const newItem: CartItem = {
        id: item._id,
        name: item.name,
        price:
          item.variants.length > 0
            ? selectedVariant?.price || item.basePrice
            : item.basePrice,
        variantId: item.variants.length > 0 ? selectedVariant?._id : undefined,
        variation:
          item.variants.length > 0 ? selectedVariant?.variation : undefined,
        quantity: 1,
      };

      setCart([...cart, newItem]);
      toast.success(`${item.name} added to cart`)
    }

  }

  return mobile ? (
    <button
      onClick={handleAddToCart}
      className="
      absolute
      bottom-3
      right-3
      flex
      h-8
      w-8
      items-center
      justify-center
      rounded-full
      bg-[var(--button-color)]
      text-[var(--button-text-color)]
      shadow-xl
      backdrop-blur-md
      transition
      duration-300
      hover:scale-110
      active:scale-95
      sm:hidden
    "
    >
      <Plus size={18} strokeWidth={3} />
    </button>
  ) : (
    <button
      onClick={handleAddToCart}
      className="
      mt-3
      hidden
      sm:block
      w-full
      rounded-2xl
      bg-[var(--button-color)]
      py-3.5
      font-semibold
      text-[var(--button-text-color)]
      transition
      duration-300
      hover:scale-[1.02]
      hover:bg-[var(--primary-color)]
      hover:text-[var(--background-color)]
      active:scale-95
    "
    >
      Add to Cart
    </button>
  );
}

export default AddToCart;