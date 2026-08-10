const DealsHero = () => {
  return (
    <section className="relative overflow-hidden border-b border-[var(--primary-color)]/10 bg-[var(--background-color)]">
      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[var(--primary-color)]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl px-5 py-16 text-center md:py-20">
        <span
          className="
            inline-flex
            rounded-full
            border
            border-[var(--primary-color)]/20
            bg-[var(--card-color)]
            px-5
            py-2
            text-sm
            font-semibold
            uppercase
            tracking-[0.25em]
            text-[var(--primary-color)]
          "
        >
          Special Offers
        </span>

        <h1
          className="
            mt-6
            text-4xl
            font-black
            leading-tight
            text-[var(--text-color)]
            sm:text-5xl
            md:text-6xl
          "
        >
          Delicious Deals
        </h1>

        <p
          className="
            mx-auto
            mt-5
            max-w-2xl
            text-base
            leading-8
            text-[var(--text-color)]/65
            md:text-lg
          "
        >
          Enjoy our specially crafted meal combinations at a great
          price. Pick a deal and customize your items.
        </p>
      </div>
    </section>
  );
};

export default DealsHero;