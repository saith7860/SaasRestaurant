import express from 'express';
import 'dotenv/config'
import http from 'http';
import { Server } from 'socket.io';
import type { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import { initSocket } from './config/socket.js';
import { corsOriginChecker } from './originChecker.js';
//File imports
import { connectDB } from './utils/db.js';
import categoryRouter from './routes/categoryRouter.js';
import itemRouter from './routes/itemRouter.js';
import { handleError } from './middlewares/errorHandler.js';
import UserRouter from './routes/userRouter.js';
import resturantRouter from './routes/resturantRouter.js';
import orderRouter from './routes/orderRouter.js';
import branchRouter from './routes/branchRouter.js';
import variantRouter from './routes/variantRouter.js';
import whatsappRouter from './routes/whatappRouter.js';
import superAdminRouter from './routes/superAdminRoute.js';
import dealRouter from './routes/dealRoute.js';
//constants
const PORT=process.env.PORT||3000;
const app:Express=express();
const server=http.createServer(app);
app.use(cookieParser())
// app.use(cors({
//    origin: ["https://foodordersystemonline.vercel.app","http://localhost:5173","http://[IP_ADDRESS]"],
//   methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
//   credentials: true
// }));
const allowedOrigins = [
  "http://localhost:5173",
  "https://orderva.com",
  "https://saas-restaurantl.vercel.app"
];
const io=new Server(server,{
  cors:{
    origin:corsOriginChecker,
    methods:['GET','POST','PUT','PATCH','DELETE'],
    credentials:true
  }
})
initSocket(io)
app.use(
  cors({
    origin(origin, callback) {
      console.log("Incoming Origin:", origin);

      if (!origin) {
        console.log("Allowed (no origin)");
        return callback(null, true);
      }

      if (
        allowedOrigins.includes(origin) ||
        origin.endsWith(".localhost:5173") ||
        origin.endsWith(".orderva.com")||
        origin.endsWith(".saas-restaurantl.vercel.app")
      ) {
        console.log("Allowed:", origin);
        return callback(null, true);
      }

      console.log("Blocked:", origin);
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

app.use(express.json());

app.use(helmet());
//Routes
app.use("/api/category",categoryRouter) //CATEGORY ROUTER
app.use("/api/item",itemRouter) //ITEM ROUTER
app.use("/api/user",UserRouter) //User ROUTER
app.use("/api/resturant",resturantRouter) //Resturant ROUTER
app.use("/api/order",orderRouter) //ORDER ROUTER
app.use("/api/branch",branchRouter) //BRANCH ROUTER
app.use("/api/variant",variantRouter) //VARIANT ROUTER
app.use("/whatsapp",whatsappRouter);
app.use("/api/super_admin",superAdminRouter);
app.use("/api/deals",dealRouter)
//handle error middleware
app.use(handleError);

io.on("connection", (socket) => {

    console.log("New socket connected:", socket.id);
     socket.on("join-restaurant", (restaurantId:string) => {
        console.log(
            `Socket ${socket.id} joined restaurant room: ${restaurantId}`
        );
        socket.join(restaurantId);
    });
    socket.on("disconnect", () => {
        console.log("Socket disconnected:", socket.id);
    });

});
server.listen(PORT,async()=>{
    try {
        await connectDB();
         console.log('app is listening on port',PORT);
    } catch (error) {
        console.log('error in starting the server',error);
        
    }
   
})