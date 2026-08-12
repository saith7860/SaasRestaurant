import { ArrowRight, PackageCheck } from "lucide-react";
import type { Deal } from "../../pages/Deals/DealsPage";

interface Props {
  deal: Deal;
  onClick: () => void;
}

const DealCard = ({ deal, onClick }: Props) => {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-[var(--primary-color)]/10
        bg-[var(--card-color)]
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[var(--primary-color)]/30
        hover:shadow-2xl
      "
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={deal?.image?.url}
          alt={deal?.title}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        <div
          className="
            absolute
            left-4
            top-4
            rounded-full
            bg-[var(--primary-color)]
            px-3
            py-1
            text-xs
            font-bold
            text-white
            shadow-lg
          "
        >
          SPECIAL DEAL
        </div>

        <div
          className="
            absolute
            bottom-4
            right-4
            rounded-full
            bg-[var(--background-color)]/90
            px-4
            py-2
            font-black
            text-[var(--primary-color)]
            shadow-lg
            backdrop-blur
          "
        >
          Rs. {deal.totalPrice}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="text-xl font-black">
          {deal.title}
        </h2>

        <div className="mt-3 flex items-center gap-2 text-sm text-[var(--text-color)]/60">
          <PackageCheck size={17} />

          <span>
            {deal.items.length} items included
          </span>
        </div>

        <button
          type="button"
          onClick={onClick}
          className="
            mt-5
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-[var(--button-color)]
            px-5
            py-3
            font-semibold
            text-[var(--button-text-color)]
            shadow
            transition-all
            duration-200
            hover:-translate-y-0.5
            hover:bg-[var(--primary-color)]
            hover:text-[var(--background-color)]
            active:scale-95
          "
        >
          Customize Deal
          <ArrowRight size={18} />
        </button>
      </div>
    </article>
  );
};

export default DealCard;