import {
  Check,
  ShoppingCart,
  X,
} from "lucide-react";
import type { Deal, variantType } from "../../types/DashBoardtype";
import { toast } from "react-toastify";
import { useContext } from "react";

import { CartContext } from "../../context/CartContext";
import type { CartItem } from "../../types/CartType";
import type { Deals } from "../../types/DashBoardtype";
import { useRestaurant } from "../../context/RestaurantContext";
import type { ItemType } from "../../types/HomePageTypes";

interface DealDrawerProps {
  deal: Deals;
  onClose: () => void;
}

const DealDrawer = ({
  deal,
  onClose,
}: DealDrawerProps) => {
  const { setCart } = useContext(CartContext);

  const { restaurantData } = useRestaurant();

  const restaurantItems = restaurantData?.items ?? [];

  /*
   * Resolve the actual restaurant item
   * using the itemId stored inside the deal.
   */
  const resolvedDealItems = deal.items.map((dealItem:Deal) => {
    const restaurantItem = restaurantItems.find(
      (item:ItemType) => item._id === dealItem.itemId
    );

    /*
     * Find the selected variant if the deal
     * contains a variantId.
     */
    const selectedVariant = restaurantItem?.variants?.find(
      (variant:variantType) =>
        variant._id === dealItem.variantId
    );

    return {
      dealItem,
      restaurantItem,
      selectedVariant,
    };
  });

  const handleAddToCart = () => {
    const dealCartItem: CartItem = {
      id: `deal-${deal._id}`,
      name: deal.title,
      image: deal.image?.url,
      price: deal.totalPrice,
      quantity: 1,

      type: "deal",
      dealId: deal._id,

      dealItems: resolvedDealItems.map(
        ({
          dealItem,
          restaurantItem,
          selectedVariant,
        }) => ({
          itemId: dealItem.itemId,

          itemName:
            restaurantItem?.name ??
            "Unknown item",

          itemImage:
            restaurantItem?.image?.url,

          quantity: dealItem.quantity,

          variantId: dealItem.variantId,

          variation:
            selectedVariant?.variation,

          variantPrice:
            selectedVariant?.price,
        })
      ),
    };

    setCart((previousCart) => {
      const existingDeal = previousCart.find(
        (item) =>
          item.type === "deal" &&
          item.dealId === deal._id
      );

      if (existingDeal) {
        return previousCart.map((item) =>
          item.type === "deal" &&
          item.dealId === deal._id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...previousCart,
        dealCartItem,
      ];
    });

    toast.success(
      `${deal.title} added to cart successfully!`
    );

    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="
          fixed
          inset-0
          z-40
          bg-black/50
          backdrop-blur-sm
        "
      />

      {/* Drawer */}
      <aside
        className="
          fixed
          right-0
          top-0
          z-50
          flex
          h-screen
          w-full
          max-w-md
          flex-col
          overflow-hidden
          bg-[var(--background-color)]
          shadow-2xl
        "
      >
        {/* Header */}
        <div
          className="
            flex
            shrink-0
            items-center
            justify-between
            border-b
            border-[var(--primary-color)]/10
            bg-[var(--card-color)]
            px-5
            py-4
          "
        >
          <div>
            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[var(--primary-color)]
              "
            >
              Deal Details
            </p>

            <h2 className="mt-1 text-xl font-black">
              {deal.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close deal"
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-[var(--primary-color)]/10
              bg-[var(--background-color)]
              text-[var(--text-color)]/70
              transition-all
              hover:border-[var(--primary-color)]/30
              hover:bg-[var(--primary-color)]/10
              hover:text-[var(--primary-color)]
              active:scale-95
            "
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-5 py-6">

          {/* Deal Image */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src={deal.image?.url}
              alt={deal.title}
              className="
                h-52
                w-full
                object-cover
              "
            />
          </div>

          {/* Deal Info */}
          <div className="mt-5">
            <h3 className="text-2xl font-black">
              {deal.title}
            </h3>

            {deal.description && (
              <p
                className="
                  mt-2
                  text-sm
                  leading-6
                  text-[var(--text-color)]/60
                "
              >
                {deal.description}
              </p>
            )}

            <div
              className="
                mt-4
                flex
                items-center
                justify-between
                rounded-xl
                bg-[var(--primary-color)]/10
                px-4
                py-3
              "
            >
              <span className="text-sm font-semibold">
                Deal Price
              </span>

              <span
                className="
                  text-xl
                  font-black
                  text-[var(--primary-color)]
                "
              >
                Rs. {deal.totalPrice}
              </span>
            </div>
          </div>

          {/* Included Items */}
          <div className="mt-7">

            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold">
                What's Included
              </h3>

              <span className="text-sm text-[var(--text-color)]/50">
                {deal.items.length}{" "}
                {deal.items.length === 1
                  ? "item"
                  : "items"}
              </span>
            </div>

            <div className="mt-4 space-y-3">

              {resolvedDealItems.map(
                ({
                  dealItem,
                  restaurantItem,
                  selectedVariant,
                }) => (
                  <div
                    key={dealItem.itemId}
                    className="
                      rounded-2xl
                      border
                      border-[var(--primary-color)]/10
                      bg-[var(--card-color)]
                      p-4
                    "
                  >
                    <div className="flex gap-4">

                      {/* ITEM IMAGE */}
                      <div
                        className="
                          h-20
                          w-20
                          shrink-0
                          overflow-hidden
                          rounded-xl
                          bg-[var(--primary-color)]/10
                        "
                      >
                        {restaurantItem?.image?.url ? (
                          <img
                            src={restaurantItem.image.url}
                            alt={
                              restaurantItem.name
                            }
                            className="
                              h-full
                              w-full
                              object-cover
                            "
                          />
                        ) : (
                          <div
                            className="
                              flex
                              h-full
                              w-full
                              items-center
                              justify-center
                              text-xs
                              text-[var(--text-color)]/40
                            "
                          >
                            No image
                          </div>
                        )}
                      </div>

                      {/* ITEM INFO */}
                      <div className="min-w-0 flex-1">

                        <h4 className="font-bold">
                          {restaurantItem?.name ??
                            "Item unavailable"}
                        </h4>

                        <p
                          className="
                            mt-1
                            text-xs
                            text-[var(--text-color)]/50
                          "
                        >
                          Included in this deal
                        </p>

                        {/* Quantity */}
                        <div className="mt-2">
                          <span
                            className="
                              rounded-lg
                              bg-[var(--primary-color)]/10
                              px-2.5
                              py-1
                              text-xs
                              font-semibold
                              text-[var(--primary-color)]
                            "
                          >
                            Qty: {dealItem.quantity}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Selected Variant */}
                    {selectedVariant && (
                      <div className="mt-4">
                        <p
                          className="
                            mb-2
                            text-xs
                            font-semibold
                            uppercase
                            tracking-wide
                            text-[var(--text-color)]/50
                          "
                        >
                          Included variant
                        </p>

                        <div
                          className="
                            flex
                            items-center
                            justify-between
                            rounded-xl
                            border
                            border-[var(--primary-color)]/10
                            bg-[var(--background-color)]
                            px-3
                            py-2
                          "
                        >
                          <span className="text-sm font-semibold">
                            {selectedVariant.variation}
                          </span>

                          <span
                            className="
                              text-sm
                              font-bold
                              text-[var(--primary-color)]
                            "
                          >
                            Rs.{" "}
                            {selectedVariant.price}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Available Variants */}
                    {restaurantItem?.variants?.length ? (
                      <div className="mt-4">
                        <p
                          className="
                            mb-2
                            text-xs
                            font-semibold
                            uppercase
                            tracking-wide
                            text-[var(--text-color)]/50
                          "
                        >
                          Available variants
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {restaurantItem.variants.map(
                            (variant) => (
                              <span
                                key={
                                  variant.id ??
                                  variant._id
                                }
                                className={`
                                  rounded-lg
                                  border
                                  px-3
                                  py-1.5
                                  text-xs
                                  ${
                                    variant.id ===
                                      dealItem.variantId ||
                                    variant._id ===
                                      dealItem.variantId
                                      ? `
                                        border-[var(--primary-color)]
                                        bg-[var(--primary-color)]/10
                                        font-bold
                                        text-[var(--primary-color)]
                                      `
                                      : `
                                        border-[var(--primary-color)]/10
                                        bg-[var(--background-color)]
                                        text-[var(--text-color)]/70
                                      `
                                  }
                                `}
                              >
                                {variant.variation}
                              </span>
                            )
                          )}
                        </div>
                      </div>
                    ) : null}

                    <div
                      className="
                        mt-4
                        flex
                        items-center
                        gap-2
                        text-xs
                        font-semibold
                        text-green-500
                      "
                    >
                      <Check size={15} />
                      Included in deal
                    </div>
                  </div>
                )
              )}

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            shrink-0
            border-t
            border-[var(--primary-color)]/10
            bg-[var(--card-color)]
            p-5
          "
        >
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm text-[var(--text-color)]/60">
              Total
            </span>

            <span
              className="
                text-2xl
                font-black
                text-[var(--primary-color)]
              "
            >
              Rs. {deal.totalPrice}
            </span>
          </div>

          <button
            type="button"
            onClick={handleAddToCart}
            className="
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-[var(--button-color)]
              px-5
              py-3.5
              font-bold
              text-[var(--button-text-color)]
              shadow-lg
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:bg-[var(--primary-color)]
              hover:text-[var(--background-color)]
              active:scale-[0.98]
            "
          >
            <ShoppingCart size={19} />
            Add Deal to Cart
          </button>
        </div>
      </aside>
    </>
  );
};

export default DealDrawer;