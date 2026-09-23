import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: Props) => {
  return (
    <div
      className="
      rounded-3xl
      border
      border-[var(--primary-color)]/10
      bg-[var(--card-color)]
      p-6
      transition
      duration-300
      hover:-translate-y-1
      hover:border-[var(--primary-color)]/40
      hover:shadow-xl
    "
    >
      <div
        className="
        mb-5
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-2xl
        bg-[var(--primary-color)]/10
      "
      >
        <Icon
          size={28}
          className="text-[var(--primary-color)]"
        />
      </div>

      <h3 className="text-xl font-bold text-[var(--text-color)]">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-[var(--text-color)]/65">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;