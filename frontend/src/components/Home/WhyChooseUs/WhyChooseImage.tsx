const WhyChooseImage = () => {
  return (
    <div className="relative flex justify-center">

      <div className="absolute h-80 w-80 rounded-full bg-[var(--primary-color)]/15 blur-[120px]" />

      <img
        src="/chef.png"
        alt="Chef"
        className="
        relative
        z-10
        w-full
        max-w-md
        object-contain
      "
      />

    </div>
  );
};

export default WhyChooseImage;