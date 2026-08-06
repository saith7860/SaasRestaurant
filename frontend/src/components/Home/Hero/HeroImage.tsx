const HeroImage = () => {
  return (
    <div className="relative flex justify-center">

      <div className="absolute h-96 w-96 rounded-full bg-[var(--primary-color)]/20 blur-[120px]" />

      <img
        src="/burger.png"
        alt="Burger"
        className="relative z-10 w-full max-w-lg"
      />

    </div>
  );
};

export default HeroImage;