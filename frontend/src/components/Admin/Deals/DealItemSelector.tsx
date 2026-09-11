import { useState } from "react";
import { useRestaurant } from "../../../context/RestaurantContext";
import VariantSelector from "./VariantSelector";
import DealItemRow from "./DealItemRow";
import type { ItemType } from "../../../types/DashBoardtype";

export interface DealItem {
  itemId: string;
  variantId?: string;
  quantity: number;
}

interface DealItemSelectorProps {
  items: DealItem[];
  setItems: (items: DealItem[]) => void;
}

const DealItemSelector = ({
  items,
  setItems,
}: DealItemSelectorProps) => {
  const { restaurantData } = useRestaurant();

  const menuItems = restaurantData?.items || [];

  const [selectedItemId, setSelectedItemId] = useState("");
  const [selectedVariantId, setSelectedVariantId] = useState("");
  const [quantity, setQuantity] = useState(1);

  // Find currently selected menu item
  const selectedItem = menuItems.find(
    (item:ItemType) => item._id === selectedItemId
  );

  // Variants belonging to selected item
  const variants = selectedItem?.variants || [];

  const handleItemChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const itemId = e.target.value;

    setSelectedItemId(itemId);

    // Reset variant when item changes
    setSelectedVariantId("");
  };

  const handleAddItem = () => {
    if (!selectedItemId) {
      return;
    }

    /*
     * Check whether this exact item + variant
     * already exists in the deal.
     */
    const alreadyExists = items.some(
      (item) =>
        item.itemId === selectedItemId &&
        item.variantId ===
        (selectedVariantId || undefined)
    );

    if (alreadyExists) {
      return;
    }

    const newItem: DealItem = {
      itemId: selectedItemId,
      variantId: selectedVariantId || undefined,
      quantity,
    };

    setItems([...items, newItem]);

    // Reset selector after adding
    setSelectedItemId("");
    setSelectedVariantId("");
    setQuantity(1);
  };

  const handleRemoveItem = (index: number) => {
    const updatedItems = items.filter(
      (_, itemIndex) => itemIndex !== index
    );

    setItems(updatedItems);
  };

  const handleQuantityChange = (
    index: number,
    newQuantity: number
  ) => {
    if (newQuantity < 1) {
      return;
    }

    const updatedItems = items.map(
      (item, itemIndex) =>
        itemIndex === index
          ? {
            ...item,
            quantity: newQuantity,
          }
          : item
    );

    setItems(updatedItems);
  };

  return (
    <div className="mt-6">

      {/* Existing Deal Items */}
      {items.length > 0 && (
        <div className="space-y-3">

          {items.map((dealItem, index) => (
            <DealItemRow
              key={`${dealItem.itemId}-${dealItem.variantId ?? "default"}-${index}`}
              item={dealItem}
              menuItems={menuItems}
              onRemove={() =>
                handleRemoveItem(index)
              }
              onQuantityChange={(newQuantity) =>
                handleQuantityChange(
                  index,
                  newQuantity
                )
              }
            />
          ))}

        </div>
      )}

      {/* Add New Item */}
      <div
        className={`
          rounded-2xl
          border
          border-dashed
          border-[var(--primary-color)]/20
          p-5
          ${items.length > 0 ? "mt-4" : ""}
        `}
      >

        <div className="mb-5">
          <h3 className="text-base font-bold">
            Add Item
          </h3>

          <p className="mt-1 text-sm text-[var(--text-color)]/60 line-clamp-1">
            Select item, variant and quantity.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">

          {/* Menu Item */}
          <div>
            <label className="mb-2 block text-sm font-semibold">
              Menu Item
            </label>

            <select
              value={selectedItemId}
              onChange={handleItemChange}
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
              "
            >
              <option value="">
                Select Item
              </option>

              {menuItems.map((item:ItemType) => (
                <option
                  key={item._id}
                  value={item._id}
                >
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          {/* Variant */}
          <VariantSelector
            variants={variants}
            value={selectedVariantId}
            onChange={setSelectedVariantId}
            disabled={!selectedItemId}
          />
          
          {/* Quantity */}
          <div>
            <label className="mb-2 block text-sm font-semibold">
              Quantity
            </label>

            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) =>
                setQuantity(
                  Math.max(
                    1,
                    Number(e.target.value)
                  )
                )
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
              "
            />
          </div>

        </div>

        {/* Add Button */}
        <button
          type="button"
          onClick={handleAddItem}
          disabled={!selectedItemId}
          className="
            mt-5
            inline-flex
            items-center
            w-full
            mx-auto
            justify-center
            gap-2
            rounded-xl
            bg-[var(--button-color)]
            px-5
            py-3
            text-sm
            font-semibold
            text-[var(--button-text-color)]
            shadow-md
            transition-all
            hover:-translate-y-0.5
            hover:bg-[var(--primary-color)]
            hover:text-[var(--background-color)]
            active:scale-95
            disabled:cursor-not-allowed
            disabled:opacity-50
            disabled:hover:translate-y-0
          "
        >
          Add Item
        </button>

      </div>

      {/* Empty State */}
      {items.length === 0 && (
        <p className="mt-4 text-center text-sm text-[var(--text-color)]/50">
          No items added to this deal yet.
        </p>
      )}

    </div>
  );
};

export default DealItemSelector;