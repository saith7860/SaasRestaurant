export type NavbarProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  restaurnatName:string | null
};
export type TrackingNavProps = {
  restaurnatName: string | null;
};
export type CategoriesProps = {
  search: string;
};
export type CategoriesType={
    _id:string
    category:string 
    image:string
}
export type variant={
    _id:string
    itemId:string
    variation:string
    price:number
}
export type ItemType={
    _id:string
    name:string
    image:{
      url:string
      publicId:string
    }
    basePrice:number
    description:string
    variants:variant[];
    isAvailable:boolean
}