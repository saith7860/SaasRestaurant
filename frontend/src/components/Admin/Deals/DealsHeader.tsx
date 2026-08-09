import { Plus } from "lucide-react";

interface DealsHeaderProps {
  onCreateDeal: () => void;
}

const DealsHeader = ({
  onCreateDeal,
}: DealsHeaderProps) => {
  return (
    <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--primary-color)]">
          Restaurant Deals
        </p>

        <h1 className="mt-2 text-3xl font-black text-[var(--text-color)] md:text-4xl">
          Deals
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--text-color)]/60 md:text-base">
          Create and manage special offers and meal combinations for your customers.
        </p>
      </div>

      <button
        type="button"
        onClick={onCreateDeal}
        className="
          inline-flex
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-[var(--button-color)]
          px-5
          py-3
          font-semibold
          text-[var(--button-text-color)]
          shadow-lg
          transition-all
          duration-200
          hover:-translate-y-0.5
          hover:bg-[var(--primary-color)]
          hover:text-[var(--background-color)]
          active:scale-95
        "
      >
        <Plus size={19} />
        Create Deal
      </button>

    </div>
  );
};

export default DealsHeader;