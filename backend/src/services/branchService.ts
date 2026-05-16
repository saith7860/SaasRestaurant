import { branchType } from "../types/branchType.js";
import * as branchRepo from "../repos/branchRepo.js"
import { ApiError } from "../middlewares/errorHandler.js";
const createBranch=async(data:branchType)=>{
    console.log(data);
    
    const newBranch=await branchRepo.createBranch(data);
    if (!newBranch) {
        throw new ApiError(400,"Branch not created")
    }
    return newBranch;
}
const updateBranch=async(id:string,data:branchType)=>{
    const updateBranch=await branchRepo.updateBranch(id,data);
    if (!updateBranch) {
        throw new ApiError(400,"Branch not updated")
    }
    return updateBranch;
}
const deleteBranch=async(id:string)=>{
    const deleteBranch=await branchRepo.deleteBranch(id);
    if (!deleteBranch) {
        throw new ApiError(400,"Branch not deleted")
    }
    return deleteBranch;
}
export {createBranch,updateBranch,deleteBranch}