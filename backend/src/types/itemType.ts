type variant={
    variantion:string
    price:number
}
export type ItemType={
    name:string
    image:string
    description:string
    variants:variant[];
    isAvailable:boolean
}