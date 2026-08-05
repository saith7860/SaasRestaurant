import FeatureCard from "./FeatureCard";
import { featureData } from "./featureData";

const FeatureGrid = () => {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {featureData.map((feature) => (
        <FeatureCard
          key={feature.title}
          {...feature}
        />
      ))}
    </div>
  );
};

export default FeatureGrid;