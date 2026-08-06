import type { Dispatch, SetStateAction } from "react";
import type { variantType } from "../../types/DashBoardtype";

interface VariantsProps {
  variants: variantType[];
  selectedVariant: variantType | undefined;
  setSelectedVariant: Dispatch<SetStateAction<variantType | undefined>>;
}

const Variants = ({
  variants,
  selectedVariant,
  setSelectedVariant,
}: VariantsProps) => {
  return (
    <div className="mt-4">
      <select
        value={selectedVariant?._id || ""}
        onChange={(e) => {
          const variant = variants.find((v) => v._id === e.target.value);
          if (variant) setSelectedVariant(variant);
        }}
        className=" w-full rounded-xl border border-[var(--primary-color)]/15 bg-[var(--card-color)] px-4 py-3 text-sm outline-none focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/20 "       
      >
        <option className=" py-3 text-lg font-bold text-[var(--primary-color)]" value="" disabled>
          Select Variant
        </option>

        {variants.map((variant) => (
          <option
            key={variant._id}
            value={variant._id}
            className="bg-[var(--card-color)] text-[var(--text-color)]"
          >
            {variant.variation} - Rs {variant.price}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Variants;