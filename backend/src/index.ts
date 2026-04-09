import express from 'express';
import type { Express } from 'express';
import 'dotenv/config'
//File imports
import menuRouter from './routes/menuRouter.js';
import { connectDB } from './utils/db.js';
//constants
const PORT=process.env.PORT;
const app:Express=express();
//Routes
app.use("/api/menu",menuRouter)
app.listen(PORT,async()=>{
    try {
        await connectDB();
         console.log('app is listening on port',PORT);
    } catch (error) {
        console.log('error in starting the server',error);
        
    }
   
})