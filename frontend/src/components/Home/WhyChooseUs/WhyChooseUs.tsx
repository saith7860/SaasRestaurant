import WhyChooseHeader from "./WhyChooseHeader";
import WhyChooseImage from "./WhyChooseImage";
import FeatureGrid from "./FeatureGrid";

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden py-24">

      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-[var(--primary-color)]/10 blur-[150px]" />

      <div className="relative mx-auto grid max-w-7xl gap-20 px-5 lg:grid-cols-2 lg:items-center">

        <WhyChooseImage />

        <div>
          <WhyChooseHeader />

          <FeatureGrid />
        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;