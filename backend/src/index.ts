import express from 'express';
import type { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import 'dotenv/config'
//File imports
import { connectDB } from './utils/db.js';
import categoryRouter from './routes/categoryRouter.js';
import itemRouter from './routes/itemRouter.js';
import { handleError } from './middlewares/errorHandler.js';
import UserRouter from './routes/userRouter.js';
import resturantRouter from './routes/resturantRouter.js';
import orderRouter from './routes/orderRouter.js';
import branchRouter from './routes/branchRouter.js';
//constants
const PORT=process.env.PORT||3000;
const app:Express=express();
app.use(cors({
   origin: ["https://foodordersystemonline.vercel.app","http://localhost:5173"],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json());

app.use(helmet());
//Routes
app.use("/api/category",categoryRouter) //CATEGORY ROUTER
app.use("/api/item",itemRouter) //ITEM ROUTER
app.use("/api/user",UserRouter) //User ROUTER
app.use("/api/resturant",resturantRouter) //Resturant ROUTER
app.use("/api/order",orderRouter) //ORDER ROUTER
app.use("/api/branch",branchRouter) //BRANCH ROUTER
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