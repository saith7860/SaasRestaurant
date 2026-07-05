import type { Dispatch, SetStateAction } from "react";
import type { variantType } from "../../types/DashBoardtype";

interface VariantsProps {
  itemId: string;
  variants: variantType[];
  selectedVariant: variantType | undefined;
  setSelectedVariant: Dispatch<SetStateAction<variantType | undefined>>;
}

const Variants = ({
  itemId,
  variants,
  selectedVariant,
  setSelectedVariant,
}: VariantsProps) => {
  return (
    <div className="py-3 my-2 text-md  font-bold text-[#984447]">
      {variants.map((variant) => (
        <label key={variant._id} className="block cursor-pointer">
          <input
            type="radio"
            className="accent-[#F4B400]"
            name={`variant-${itemId}`}
            checked={selectedVariant?._id === variant._id}
            onChange={() => setSelectedVariant(variant)}
          />

          <span className="ml-2 text-md font-bold text-[#984447]">
            {variant.variation} - Rs {variant.price}
          </span>
        </label>
      ))}
    </div>
  );
};

export default Variants;