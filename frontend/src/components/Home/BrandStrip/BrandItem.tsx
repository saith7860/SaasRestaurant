import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
}

const BrandItem = ({ icon: Icon, title }: Props) => {
  return (
    <div
      className="
      flex
      items-center
      gap-3
      px-6
      py-3
      rounded-full

      border

      border-[var(--primary-color)]/10

      bg-[var(--card-color)]/70

      backdrop-blur-xl

      transition-all

      duration-300

      hover:-translate-y-1

      hover:border-[var(--primary-color)]

      hover:shadow-xl

      hover:shadow-[var(--primary-color)]/10
      "
    >
      <Icon
        size={18}
        className="text-[var(--primary-color)]"
      />

      <span
        className="
        whitespace-nowrap

        text-sm

        font-medium

        text-[var(--text-color)]
        "
      >
        {title}
      </span>
    </div>
  );
};

export default BrandItem;