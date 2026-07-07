import type { ItemType } from "../../types/HomePageTypes"

const ShowItems = ({ items }: { items: ItemType[] }) => {
  console.log("items", items);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item: ItemType) => (


          <div key={item._id} className="bg-[var(--card-color)] border border-[var(--primary-color)]/15 rounded-2xl p-5 shadow-lg hover:border-[var(--primary-color)]/50 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
            <h2 className="text-xl font-bold text-[var(--primary-color)] mb-2 tracking-wide">{item.name}</h2>
            <p className="text-[var(--text-color)]/75 text-sm leading-6">{item.description}</p>
            {/* <p>Rs {item.basePrice}</p> */}
          </div>

        ))}
      </div>
    </>
  )
}

export default ShowItems