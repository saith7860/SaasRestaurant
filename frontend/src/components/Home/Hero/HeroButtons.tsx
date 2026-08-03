import { ArrowRight } from "lucide-react";

const HeroButtons = () => {
  return (
    <div className="mt-10 flex flex-wrap gap-4">

      <button className="rounded-2xl bg-[var(--button-color)] px-8 py-4 font-semibold text-[var(--button-text-color)] shadow-xl transition hover:-translate-y-1">

        Order Now

      </button>

      <button className="flex items-center gap-2 rounded-2xl border border-[var(--primary-color)]/20 bg-[var(--card-color)] px-8 py-4 text-[var(--text-color)] transition hover:border-[var(--primary-color)]">

        Explore Menu

        <ArrowRight size={18} />

      </button>

    </div>
  );
};

export default HeroButtons;