import mongoose from "mongoose";
import Branch from "../models/branchModel.js";
import { branchType } from "../types/branchType.js";
const createBranch=async(data:branchType)=>{
    const newBranch=new Branch(data);
    await newBranch.save();
    return newBranch;
}
const getAllBranches=async(id:string)=>{
    const getAllBranches=await Branch.find({restaurant:id});
    return getAllBranches;
}
const updateBranch=async(id:string,data:branchType)=>{
    const updateBranch=await Branch.findByIdAndUpdate(id,data,{returnDocument:"after"});
    return updateBranch;
}
const deleteBranch=async(id:string)=>{
    const deleteBranch=await Branch.findByIdAndDelete(id);
    return deleteBranch;
}
export {createBranch,updateBranch,deleteBranch,getAllBranches}