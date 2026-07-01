import { Types } from "mongoose"
export type userType={
    name:string
    email:string
    password:string
    phone:string
    address:string
    role:string
    restaurantId?:string|Types.ObjectId|null|undefined
}
export type loginUserType={
    email:string
    password:string
}
export type userData={
    email:string
    role:string
    userId:string|Types.ObjectId
    restaurantId?:string|Types.ObjectId|null|undefined
}