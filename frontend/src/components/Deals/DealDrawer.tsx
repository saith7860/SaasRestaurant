import { X } from "lucide-react";
import type { Deal } from "../../pages/Deals/DealsPage";

interface DealDrawerProps {
  deal: Deal;
  onClose: () => void;
}

const DealDrawer = ({
  deal,
  onClose,
}: DealDrawerProps) => {
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
              Customize Deal
            </p>

            <h2 className="mt-1 text-xl font-black">
              {deal.title}
            </h2>
          </div>

          {/* Close */}
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
              duration-200
              hover:border-[var(--primary-color)]/30
              hover:bg-[var(--primary-color)]/10
              hover:text-[var(--primary-color)]
              active:scale-95
            "
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-5 py-6">
          {/* Deal Image */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src={deal.image}
              alt={deal.title}
              className="
                h-48
                w-full
                object-cover
              "
            />
          </div>

          {/* Description */}
          <div className="mt-5">
            <h3 className="text-lg font-bold">
              Choose Your Items
            </h3>

            <p className="mt-1 text-sm leading-6 text-[var(--text-color)]/60">
              Select your preferred variants and quantity for
              each item in this deal.
            </p>
          </div>

          {/* Items */}
          <div className="mt-6 space-y-4">
            {deal.items.map((item) => (
              <div
                key={item.itemId}
                className="
                  rounded-2xl
                  border
                  border-[var(--primary-color)]/10
                  bg-[var(--card-color)]
                  p-4
                "
              >
                <div className="flex gap-4">
                  <img
                    src={item.itemImage}
                    alt={item.itemName}
                    className="
                      h-20
                      w-20
                      shrink-0
                      rounded-xl
                      object-cover
                    "
                  />

                  <div className="min-w-0">
                    <h4 className="font-bold">
                      {item.itemName}
                    </h4>

                    <p className="mt-1 text-xs text-[var(--text-color)]/50">
                      Select variant and quantity
                    </p>
                  </div>
                </div>

                {/* Temporary variant UI */}
                <div className="mt-4">
                  <label className="mb-2 block text-sm font-semibold">
                    Variant
                  </label>

                  <select
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
                      focus:border-[var(--primary-color)]
                    "
                  >
                    {item.variants.map((variant) => (
                      <option
                        key={variant.id}
                        value={variant.id}
                      >
                        {variant.variation} — Rs. {variant.price}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Temporary quantity UI */}
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-semibold">
                    Quantity
                  </span>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-lg
                        bg-[var(--button-color)]
                        text-[var(--button-text-color)]
                        transition
                        hover:bg-[var(--primary-color)]
                        active:scale-95
                      "
                    >
                      -
                    </button>

                    <span className="min-w-6 text-center font-bold">
                      1
                    </span>

                    <button
                      type="button"
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-lg
                        bg-[var(--button-color)]
                        text-[var(--button-text-color)]
                        transition
                        hover:bg-[var(--primary-color)]
                        active:scale-95
                      "
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Summary */}
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
              Deal Price
            </span>

            <span className="text-xl font-black text-[var(--primary-color)]">
              Rs. {deal.totalPrice}
            </span>
          </div>

          <button
            type="button"
            className="
              w-full
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
            Add Deal to Cart
          </button>
        </div>
      </aside>
    </>
  );
};

export default DealDrawer;