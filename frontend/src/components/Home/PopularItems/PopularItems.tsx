import PopularItemsHeader from "./PopularItemsHeader";
import PopularItemsGrid from "./PopularItemsGrid";

interface Props {
  search: string;
}

const PopularItems = ({ search }: Props) => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">

      <PopularItemsHeader />

      <PopularItemsGrid search={search} />

    </section>
  );
};

export default PopularItems;
