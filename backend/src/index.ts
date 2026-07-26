import express from 'express';
import type { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
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
import variantRouter from './routes/variantRouter.js';
import whatsappRouter from './routes/whatappRouter.js';
import superAdminRouter from './routes/superAdminRoute.js';
import testEmailRouter from './routes/testRoute.js';
//constants
const PORT=process.env.PORT||3000;
const app:Express=express();
app.use(cookieParser())
// app.use(cors({
//    origin: ["https://foodordersystemonline.vercel.app","http://localhost:5173","http://[IP_ADDRESS]"],
//   methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
//   credentials: true
// }));
const allowedOrigins = [
  "http://localhost:5173",
  "https://orderva.com"
];
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
        origin.endsWith(".orderva.com")
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
// app.use(
//   cors({
//     origin(origin, callback) {
//       // Allow requests without an Origin header (Postman, mobile apps, etc.)
//       if (!origin) {
//         return callback(null, true);
//       }

//       if (
//         allowedOrigins.includes(origin) ||
//         origin.endsWith(".localhost:5173")||origin.endsWith(".saas-restaurantl.vercel.app")
//       ) {
//         return callback(null, true);
//       }

//       return callback(new Error("Not allowed by CORS"));
//     },

//     credentials: true,
//   })
// );
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
app.use("/api",testEmailRouter)
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