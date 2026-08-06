import type { CategoryType } from "../../../types/DashBoardtype";

interface Props {
  category: CategoryType;
  active: boolean;
  onClick: () => void;
}


const CategoryPill = ({
  category,
  active,
  onClick,
}: Props) => {
  
  console.log(category.category, active);

  return (

    
    <button
      onClick={onClick}
      className={`
        shrink-0
        rounded-full
        px-4
        text-sm
        md:text-base
        font-semibold
        transition-all
        duration-300

        
        ${
          active
            ? "bg-[var(--primary-color)] text-white shadow-lg"
            : "bg-[var(--card-color)] border border-[var(--primary-color)]/15 text-[var(--text-color)] hover:border-[var(--primary-color)]/40 hover:bg-[var(--primary-color)]/5"
        }
      `}
    >
      {category.category}

      <span className="ml-2 opacity-70">
        ({category.items.length})
      </span>
    </button>
  );
};

export default CategoryPill;