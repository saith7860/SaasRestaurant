import type { ItemType } from "../../types/HomePageTypes"

const ShowItems = ({items}: {items:ItemType[]}) => {
  console.log("items",items);
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {items.map((item:ItemType)=>(
    
      
            <div key={item._id}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                {/* <p>Rs {item.basePrice}</p> */}
            </div>
        
    ))}
    </div>
    </>
  )
}

export default ShowItems