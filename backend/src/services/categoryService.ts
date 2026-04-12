import * as categoryRepo from '../repos/categoryRepo.js';
import { ApiError } from '../middlewares/errorHandler.js';
const fetchMenu=async()=>{
   const menus=await categoryRepo.showAllMenu();
   if (!menus.length) {
    throw new ApiError(404,'Menu not found');
   }
   return menus;
}
export {fetchMenu}