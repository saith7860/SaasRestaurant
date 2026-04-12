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
// const handleError = (
//   err: ApiError,
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   if (err instanceof ApiError) {
//     return res.status(err.statusCode).json({
//       success: false,
//       message: err.message,
//     });
//   }

//   // Unknown error
//   return res.status(500).json({
//     success: false,
//     message: "Internal Server Error",
//   });
// };
export {ApiError,handleError}