import express from 'express';
import type { Express } from 'express';
import 'dotenv/config'
//File imports
import { connectDB } from './utils/db.js';
import categoryRouter from './routes/categoryRouter.js';
import itemRouter from './routes/itemRouter.js';
import { handleError } from './middlewares/errorHandler.js';
import UserRouter from './routes/userRouter.js';
//constants
const PORT=process.env.PORT;
const app:Express=express();
app.use(express.json());
//Routes
app.use("/api/menu",categoryRouter) //CATEGORY ROUTER
app.use("/api/item",itemRouter) //ITEM ROUTER
app.use("/api/user",UserRouter) //User ROUTER
//handle error middleware
app.use(handleError);
app.listen(PORT,async()=>{
    try {
        await connectDB();
         console.log('app is listening on port',PORT);
    } catch (error) {
        console.log('error in starting the server',error);
        
    }
   
})