import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--background-color)]">
      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col-reverse items-center gap-12 px-6 py-16 lg:flex-row lg:justify-between">

        <HeroContent />

        <HeroImage />

      </div>
    </section>
  );
};

export default Hero;