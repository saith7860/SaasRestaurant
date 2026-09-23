import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

const HeroContent = () => {
  return (
    <div className="max-w-xl">

      <span className="inline-flex rounded-full border border-[var(--primary-color)]/20 bg-[var(--card-color)] px-4 py-2 text-sm text-[var(--text-color)]/70 shadow-sm">
        🔥 Now delivering in your area
      </span>

      <h1 className="mt-8 text-5xl font-black leading-none tracking-tight text-[var(--text-color)] md:text-7xl">
        Craving
        <br />
        Something
        <br />
        <span className="text-[var(--primary-color)]">
          Delicious?
        </span>
      </h1>

      <p className="mt-8 text-lg leading-8 text-[var(--text-color)]/70">
        Fresh ingredients, premium quality and lightning-fast
        delivery right to your door.
      </p>

      <HeroButtons />

      <HeroStats />

    </div>
  );
};

export default HeroContent;