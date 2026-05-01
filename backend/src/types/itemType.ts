type variant={
    variantion:string
    price:number
}
export type ItemType={
    _id:string
    name:string
    image:string
    basePrice:number
    description:string
    variants:variant[];
    isAvailable:boolean
}