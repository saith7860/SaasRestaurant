export type NavbarType={
restaurnatName:string
}
export type CategoriesType={
    _id:string
    category:string 
    image:string
}
export type variant={
    _id:string
    variation:string
    price:number
}
export type ItemType={
    _id:string
    name:string
    image:string
    description:string
    variants:variant[];
    isAvailable:boolean
}