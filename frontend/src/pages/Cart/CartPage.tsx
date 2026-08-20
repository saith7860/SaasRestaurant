import { useContext } from "react";
import { Plus, Minus, Trash2, Check, ImageOff } from "lucide-react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router";
import { getAccessToken } from "../../api/tokenStore";

const CartPage = () => {
  const { cart, setCart } = useContext(CartContext)!;

  const token = getAccessToken();

  const checkoutRoute = token
    ? "/checkout"
    : "/signup?redirect=/checkout";

  /**
   * Get image URL safely.
   *
   * Your API can return:
   *
   * image: "https://..."
   *
   * OR:
   *
   * image: {
   *   url: "https://...",
   *   publicId: "..."
   * }
   */
  const getImageUrl = (
    image:
      | string
      | {
          url?: string;
          publicId?: string;
        }
      | null
      | undefined
  ): string | null => {
    if (!image) {
      return null;
    }

    if (typeof image === "string") {
      return image;
    }

    return image.url ?? null;
  };

  // Decrease quantity
  const decreaseQty = (itemId: string) => {
    const updatedCart = cart
      .map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
  };

  // Increase quantity
  const increaseQty = (itemId: string) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );

    setCart(updatedCart);
  };

  // Remove item
  const removeItem = (itemId: string) => {
    setCart(
      cart.filter((item) => item.id !== itemId)
    );
  };

  // Total
  const total = cart.reduce(
    (acc, item) =>
      acc + item.price * item.quantity,
    0
  );

  console.log("CART:", cart);

  return (
    <div
      className="
        min-h-screen
        bg-[var(--background-color)]
        px-4
        py-8
        pt-10
        text-[var(--text-color)]
        sm:px-6
        lg:px-8
      "
    >
      {/* EMPTY CART */}
      {cart.length === 0 ? (
        <div className="flex min-h-[60vh] items-center justify-center">
          <p
            className="
              text-center
              text-2xl
              font-bold
              tracking-wide
              text-[var(--primary-color)]
            "
          >
            Your cart is empty!
          </p>
        </div>
      ) : (
        /* CART ITEMS */
        cart.map((item) => {
          const imageUrl = getImageUrl(item.image);

          return (
            <section
              key={item.id}
              className="
                mb-5
                rounded-2xl
                border
                border-[var(--primary-color)]/15
                bg-[var(--card-color)]
                p-6
                shadow-xl
                transition-all
                duration-300
                hover:border-[var(--primary-color)]/40
                hover:shadow-2xl
              "
            >
              {/* MAIN ITEM */}
              <div
                className="
                  flex
                  flex-col
                  gap-5
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >
                {/* ITEM INFO */}
                <div className="flex min-w-0 items-center gap-4">

                  {/* ITEM IMAGE */}
                  <div
                    className="
                      h-24
                      w-24
                      shrink-0
                      overflow-hidden
                      rounded-xl
                      border
                      border-white/10
                      bg-[var(--background-color)]
                    "
                  >
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={item.name}
                        className="
                          h-full
                          w-full
                          object-cover
                        "
                        onError={(event) => {
                          event.currentTarget.style.display =
                            "none";
                        }}
                      />
                    ) : (
                      <div
                        className="
                          flex
                          h-full
                          w-full
                          flex-col
                          items-center
                          justify-center
                          gap-1
                          text-[var(--text-color)]/40
                        "
                      >
                        <ImageOff size={20} />
                        <span className="text-[10px]">
                          No image
                        </span>
                      </div>
                    )}
                  </div>

                  {/* NAME + INFO */}
                  <div className="min-w-0">

                    <div className="flex flex-wrap items-center gap-2">
                      <h1
                        className="
                          truncate
                          text-xl
                          font-bold
                          text-[var(--primary-color)]
                        "
                      >
                        {item.name}
                      </h1>

                      {item.type === "deal" && (
                        <span
                          className="
                            rounded-full
                            bg-[var(--primary-color)]/10
                            px-2.5
                            py-1
                            text-xs
                            font-bold
                            text-[var(--primary-color)]
                          "
                        >
                          DEAL
                        </span>
                      )}
                    </div>

                    {item.type !== "deal" &&
                      item.variation && (
                        <p
                          className="
                            mt-1
                            text-sm
                            text-[var(--text-color)]/70
                          "
                        >
                          Variant: {item.variation}
                        </p>
                      )}

                    <p className="mt-2 text-sm">
                      Price: Rs.{" "}
                      {item.price * item.quantity}
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm
                        text-[var(--text-color)]/70
                      "
                    >
                      Qty: {item.quantity}
                    </p>
                  </div>
                </div>

                {/* QUANTITY */}
                <div
                  className="
                    flex
                    shrink-0
                    items-center
                    justify-end
                    gap-1
                  "
                >
                  <button
                    type="button"
                    onClick={() =>
                      decreaseQty(item.id)
                    }
                    className="
                      rounded-lg
                      bg-[var(--button-color)]
                      p-2
                      text-[var(--button-text-color)]
                      shadow
                      transition
                      hover:bg-[var(--primary-color)]
                      hover:text-[var(--background-color)]
                      active:scale-95
                    "
                  >
                    <Minus size={18} />
                  </button>

                  <span
                    className="
                      min-w-8
                      text-center
                      text-lg
                      font-semibold
                    "
                  >
                    {item.quantity}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      increaseQty(item.id)
                    }
                    className="
                      rounded-lg
                      bg-[var(--button-color)]
                      p-2
                      text-[var(--button-text-color)]
                      shadow
                      transition
                      hover:bg-[var(--primary-color)]
                      hover:text-[var(--background-color)]
                      active:scale-95
                    "
                  >
                    <Plus size={18} />
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      removeItem(item.id)
                    }
                    className="
                      ml-3
                      rounded-lg
                      p-2
                      text-red-400
                      transition-colors
                      hover:bg-red-500/10
                      hover:text-red-300
                    "
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>

              {/* DEAL ITEMS */}
              {item.type === "deal" &&
                item.dealItems &&
                item.dealItems.length > 0 && (
                  <div
                    className="
                      mt-5
                      rounded-xl
                      border
                      border-[var(--primary-color)]/10
                      bg-[var(--background-color)]
                      p-4
                    "
                  >
                    <div
                      className="
                        mb-3
                        flex
                        items-center
                        justify-between
                      "
                    >
                      <h3 className="font-bold">
                        What's Included
                      </h3>

                      <span
                        className="
                          text-xs
                          text-[var(--text-color)]/50
                        "
                      >
                        {item.dealItems.length}{" "}
                        {item.dealItems.length === 1
                          ? "item"
                          : "items"}
                      </span>
                    </div>

                    <div className="space-y-3">
                      {item.dealItems.map(
                        (dealItem) => {
                          const dealItemImage =
                            getImageUrl(
                              dealItem.itemImage
                            );

                          return (
                            <div
                              key={`${item.id}-${dealItem.itemId}`}
                              className="
                                flex
                                items-center
                                gap-3
                                rounded-xl
                                border
                                border-[var(--primary-color)]/10
                                bg-[var(--card-color)]
                                p-3
                              "
                            >
                              {/* DEAL ITEM IMAGE */}
                              <div
                                className="
                                  h-14
                                  w-14
                                  shrink-0
                                  overflow-hidden
                                  rounded-lg
                                  bg-[var(--background-color)]
                                "
                              >
                                {dealItemImage ? (
                                  <img
                                    src={dealItemImage}
                                    alt={
                                      dealItem.itemName
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
                                    <ImageOff
                                      size={16}
                                    />
                                  </div>
                                )}
                              </div>

                              {/* DEAL ITEM INFO */}
                              <div className="min-w-0 flex-1">
                                <p className="font-semibold">
                                  {
                                    dealItem.itemName
                                  }
                                </p>

                                {dealItem.variation && (
                                  <p
                                    className="
                                      mt-1
                                      text-xs
                                      text-[var(--text-color)]/60
                                    "
                                  >
                                    Variant:{" "}
                                    {
                                      dealItem.variation
                                    }
                                  </p>
                                )}

                                {dealItem.quantity && (
                                  <p
                                    className="
                                      mt-1
                                      text-xs
                                      text-[var(--text-color)]/60
                                    "
                                  >
                                    Included quantity:{" "}
                                    {
                                      dealItem.quantity
                                    }
                                  </p>
                                )}
                              </div>

                              <Check
                                size={18}
                                className="
                                  shrink-0
                                  text-green-500
                                "
                              />
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                )}
            </section>
          );
        })
      )}

      {/* CART SUMMARY */}
      {cart.length > 0 && (
        <>
          <div
            className="
              mt-8
              flex
              items-center
              justify-between
              border-t
              border-[var(--primary-color)]/10
              pt-5
            "
          >
            <span className="text-lg font-semibold">
              Cart Total
            </span>

            <h2
              className="
                text-3xl
                font-bold
                text-[var(--primary-color)]
              "
            >
              Rs. {total}
            </h2>
          </div>

          <Link
            to={checkoutRoute}
            className="block"
          >
            <button
              type="button"
              className="
                mx-auto
                mt-6
                block
                w-full
                max-w-[320px]
                rounded-xl
                bg-[var(--button-color)]
                px-6
                py-3
                text-center
                font-semibold
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
              Proceed To Checkout
            </button>
          </Link>
        </>
      )}

      {/* RETURN */}
      <Link
        to="/menu"
        className="block"
      >
        <button
          type="button"
          className="
            mx-auto
            mt-6
            block
            w-full
            max-w-[320px]
            rounded-xl
            bg-[var(--button-color)]
            px-6
            py-3
            text-center
            font-semibold
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
          Return to Menu
        </button>
      </Link>
    </div>
  );
};

export default CartPage;