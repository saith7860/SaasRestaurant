const HeroStats = () => {
  return (
    <div className="mt-10 grid grid-cols-3 gap-4">

      <div className="border rounded-2xl p-4">
        <p className="text-2xl font-bold">4.9⭐</p>
        <span className="text-sm text-[var(--text-color)]/60">
          Rating
        </span>
      </div>

      <div className="border rounded-2xl p-4">
        <p className="text-2xl font-bold">15K+</p>
        <span className="text-sm text-[var(--text-color)]/60">
          Orders
        </span>
      </div>

      <div className="border rounded-2xl p-4">
        <p className="text-2xl font-bold">30 <span className="text-sm">Min</span></p>
        <span className="text-sm text-[var(--text-color)]/60">
          Delivery
        </span>
      </div>

    </div>
  );
};

export default HeroStats;