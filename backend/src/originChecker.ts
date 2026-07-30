const allowedOrigins = [
  "http://localhost:5173",
  "https://orderva.com",
  "https://saas-restaurantl.vercel.app"
];
export const corsOriginChecker = (
    origin: string | undefined,
    callback: (err: Error | null, success?: boolean) => void
) => {

    console.log("Socket Origin:", origin);


    if (!origin) {
        return callback(null, true);
    }


    if (
        allowedOrigins.includes(origin) ||
        origin.endsWith(".localhost:5173") ||
        origin.endsWith(".orderva.com") ||
        origin.endsWith(".saas-restaurantl.vercel.app")
    ) {
        console.log("Socket Allowed:", origin);
        return callback(null, true);
    }


    console.log("Socket Blocked:", origin);
    return callback(new Error("Not allowed by Socket.IO CORS"));
};