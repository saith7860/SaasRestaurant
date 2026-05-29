import type { variantType } from "../../types/DashBoardtype"
import { useState } from "react"
interface VariantsProps {
    variant: variantType[]
    selectedVariant:variantType | undefined
    setSelectedVariants:React.Dispatch<React.SetStateAction<variantType | undefined>>
}

const Variants = ({variant,selectedVariant,setSelectedVariants}: VariantsProps) => {
 
  const handleVariantSelect = (variant:variantType)=>{
    setSelectedVariants(variant);
  }
  console.log(selectedVariant);
  
  return (
    <div>
        {
        variant?.map((v:variantType)=>(
            <div key={v._id}>
                <input onChange={()=>handleVariantSelect(v)} type="radio" name="variant" id={v._id} value={v._id}/>
                <label htmlFor={v._id}>{v.variation}</label>
                <p>{v.price}</p>
            </div>
        ))
        }
      <div className="text-xl text-green-500">Rs.{selectedVariant?.price}</div>  
    </div>
  )
}

export default Variants