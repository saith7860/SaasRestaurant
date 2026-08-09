import { Minus, Plus, Trash2 } from "lucide-react";
import type { DealItem } from "./DealItemSelector";

interface DealItemRowProps {
  item: DealItem;
  menuItems: any[];
  onRemove: () => void;
  onQuantityChange: (quantity: number) => void;
}

const DealItemRow = ({
  item,
  menuItems,
  onRemove,
  onQuantityChange,
}: DealItemRowProps) => {
  // Find the actual menu item
  const menuItem = menuItems.find(
    (menuItem) => menuItem._id === item.itemId
  );

  // Find selected variant
  const variant = menuItem?.variants?.find(
    (variant: any) =>
      variant._id === item.variantId
  );

  if (!menuItem) {
    return null;
  }

  return (
    <div
      className="
        flex
        flex-col
        gap-4
        rounded-2xl
        border
        border-[var(--primary-color)]/10
        bg-[var(--background-color)]
        p-4
        transition-all
        hover:border-[var(--primary-color)]/30
        sm:flex-row
        sm:items-center
        sm:justify-between
      "
    >
      {/* Item Information */}
      <div className="flex items-center gap-4">

        {/* Item Image */}
        {menuItem.image?.url ? (
          <img
            src={menuItem.image.url}
            alt={menuItem.name}
            className="
              h-16
              w-16
              shrink-0
              rounded-xl
              object-cover
              border
              border-[var(--primary-color)]/10
            "
          />
        ) : (
          <div
            className="
              flex
              h-16
              w-16
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-[var(--primary-color)]/10
              text-2xl
            "
          >
            🍔
          </div>
        )}

        {/* Name + Variant */}
        <div>
          <h3 className="font-bold text-[var(--text-color)]">
            {menuItem.name}
          </h3>

          {variant ? (
            <p className="mt-1 text-sm text-[var(--text-color)]/60">
              Variant:{" "}
              <span className="font-semibold text-[var(--primary-color)]">
                {variant.variation}
              </span>

              <span className="ml-2">
                Rs. {variant.price}
              </span>
            </p>
          ) : (
            <p className="mt-1 text-sm text-[var(--text-color)]/50">
              Standard item
            </p>
          )}
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center justify-between gap-4 sm:justify-end">

        {/* Quantity */}
        <div className="flex items-center rounded-xl border border-[var(--primary-color)]/15 bg-[var(--card-color)]">

          {/* Decrease */}
          <button
            type="button"
            onClick={() =>
              onQuantityChange(
                Math.max(1, item.quantity - 1)
              )
            }
            disabled={item.quantity <= 1}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-l-xl
              transition
              hover:bg-[var(--primary-color)]/10
              disabled:cursor-not-allowed
              disabled:opacity-40
            "
          >
            <Minus size={16} />
          </button>

          {/* Quantity */}
          <span
            className="
              flex
              h-10
              min-w-10
              items-center
              justify-center
              border-x
              border-[var(--primary-color)]/10
              px-2
              text-sm
              font-bold
            "
          >
            {item.quantity}
          </span>

          {/* Increase */}
          <button
            type="button"
            onClick={() =>
              onQuantityChange(
                item.quantity + 1
              )
            }
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-r-xl
              transition
              hover:bg-[var(--primary-color)]/10
            "
          >
            <Plus size={16} />
          </button>

        </div>

        {/* Remove */}
        <button
          type="button"
          onClick={onRemove}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            text-red-400
            transition-all
            hover:bg-red-500/10
            hover:text-red-300
            active:scale-95
          "
          title="Remove item"
        >
          <Trash2 size={18} />
        </button>

      </div>
    </div>
  );
};

export default DealItemRow;