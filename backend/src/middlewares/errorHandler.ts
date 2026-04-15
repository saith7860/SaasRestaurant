import { Request,Response,NextFunction } from "express";
class ApiError extends Error{
  statusCode: number;
    constructor(statusCode:number,message:string){
     super(message);
     this.statusCode=statusCode;
     this.message=message;
     
    }
}
const handleError=(err:ApiError,req:Request,res:Response,next:NextFunction)=>{
    const {message,statusCode}=err;
    res.status(statusCode||500).json({
        status:'error',
        message:message||'Internal server error',
        statusCode:statusCode

    })
}
export {ApiError,handleError}