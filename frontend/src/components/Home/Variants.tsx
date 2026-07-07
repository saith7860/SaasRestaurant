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
    <div className="my-3 flex flex-col gap-3">
      {variants.map((variant) => (
        <label key={variant._id} 
        className={`flex items-center justify-between rounded-xl border px-4 py-3 cursor-pointer transition-all duration-300 ${selectedVariant?._id === variant._id ? "border-[var(--primary-color)] bg-[var(--primary-color)]/10 shadow-lg shadow-[var(--primary-color)]/10" : "border-white/10 bg-[var(--card-color)] hover:border-[var(--primary-color)]/50 hover:bg-[var(--background-color)]"}`}>
          <input
            type="radio"
            className="h-2 w-2 accent-[var(--primary-color)] cursor-pointer"
            name={`variant-${itemId}`}
            checked={selectedVariant?._id === variant._id}
            onChange={() => setSelectedVariant(variant)}
          />

          <span className={`ml-3 flex-1 text-sm font-normal transition-colors duration-300 ${selectedVariant?._id===variant._id?"text-[var(--primary-color)]":"text-[var(--text-color)]"}`}>
            {variant.variation} - Rs {variant.price}
          </span>
        </label>
      ))}
    </div>
  );
};

export default Variants;