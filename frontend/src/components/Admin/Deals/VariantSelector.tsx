interface Variant {
  _id: string;
  variation: string;
  price: number;
  isAvailable: boolean;
}

interface VariantSelectorProps {
  variants: Variant[];
  value: string;
  onChange: (variantId: string) => void;
  disabled?: boolean;
}

const VariantSelector = ({
  variants,
  value,
  onChange,
  disabled = false,
}: VariantSelectorProps) => {
  const availableVariants = variants.filter(
    (variant) => variant.isAvailable
  );

  return (
    <div>
      <label className="mb-2 block text-sm font-semibold">
        Variant
      </label>

      <select
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        disabled={
          disabled ||
          availableVariants.length === 0
        }
        className="
          w-full
          rounded-xl
          border
          border-[var(--primary-color)]/15
          bg-[var(--background-color)]
          px-4
          py-3
          text-sm
          outline-none
          transition
          focus:border-[var(--primary-color)]
          focus:ring-2
          focus:ring-[var(--primary-color)]/10
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      >
        <option value="">
          {disabled
            ? "Select Item First"
            : availableVariants.length === 0
            ? "No Variant Available"
            : "Select Variant"}
        </option>

        {availableVariants.map((variant) => (
          <option
            key={variant._id}
            value={variant._id}
          >
            {variant.variation} — Rs. {variant.price}
          </option>
        ))}
      </select>
    </div>
  );
};

export default VariantSelector;