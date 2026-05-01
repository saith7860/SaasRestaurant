import { NextFunction, Request, Response } from "express";
import * as itemService from "../services/itemService.js";
import type { ItemType } from "../types/itemType.js";
type Params={
  id:string
}
const getAllItems = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await itemService.fetchAllItems();
    return res.json({
      success: "true",
      data: items,
    });
  } catch (error) {
    next(error);
  }
};
const postItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req.body);

    const result = await itemService.createItem(req.body.category, req.body);
    return res.json({
      success: "true",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getSpecificItem = (req: Request, res: Response) => {
  try {
  } catch (error) {}
};
const updateSpecificItem = async(req: Request<Params>, res: Response,next:NextFunction) => {
  try {
    const {id}=req.params;
    const data:ItemType=req.body;
    const updateItem=await itemService.updateSpecItem(id,data);
    return res.json({
      success: "true",
      data: updateItem,
    });
    
  } catch (error) {
    console.log('error in updating specific item',error);
    next(error);
    
  }
};
const deleteSpecificItem =async (req: Request<Params>, res: Response,next:NextFunction) => {
  try {
const {id}=req.params;
   const deleteItem=await itemService.deleteSpecificItem(id);
    return res.json({
      success: "true",
      data: deleteItem,
    });
  } catch (error) {
    next(error)
  }
};
export {
  getAllItems,
  deleteSpecificItem,
  updateSpecificItem,
  getSpecificItem,
  postItem,
};
 