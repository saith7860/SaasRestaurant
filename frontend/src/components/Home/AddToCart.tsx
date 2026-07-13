import type { variantType } from "../../types/DashBoardtype";
import type {ItemType } from "../../types/HomePageTypes";
import type { CartItem } from "../../types/CartType";
import { toast } from "react-toastify";
interface AddToCartProps {
    item:ItemType
    selectedVariant:variantType | undefined
    cart:CartItem[]
    setCart:React.Dispatch<React.SetStateAction<CartItem[]>>
}

const AddToCart = ({item,selectedVariant,cart,setCart}: AddToCartProps) => {
  console.log(item,selectedVariant);

  const handleAddToCart = (e:React.MouseEvent<HTMLButtonElement> ) => {
    e.preventDefault();
    if (item.variants.length>0&&!selectedVariant) {
        toast.error("Please select a variant");
        return;
    }

    const existingItem = cart.find(
    (cartItem) =>
      cartItem.id === item._id &&
      (item.variants.length === 0 ||
        cartItem.variantId === selectedVariant?._id)
  );

  if(existingItem) {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === item._id &&
      (item.variants.length === 0 ||
        cartItem.variantId === selectedVariant?._id)
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );

    setCart(updatedCart);
    toast.success(`${item.name} Quantity updated`);
  }else {
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
    
  return (
   <button   className="mt-auto w-full rounded-xl bg-[var(--button-color)] py-3 mb-2 font-semibold text-[var(--button-text-color)] shadow-md transition-all duration-300 hover:bg-[var(--primary-color)] hover:text-[var(--background-color)] hover:shadow-xl active:scale-[0.98]" onClick={(e)=>handleAddToCart(e)}>Add To Cart</button>
  )
}

export default AddToCart;