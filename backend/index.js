import express from "express"
import dotenv from "dotenv"
import databaseconnection from "./config/database.js";
import cookieParser from "cookie-parser";
import userRoute from './routes/userRouters.js'
import tweetRouter from './routes/tweetRouters.js'

dotenv.config({
    path:".env"
})
databaseconnection();
const app=express();

app.use(express.urlencoded({
    extends:true
}));
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/user", userRoute)
app.use("/api/v1/tweet",tweetRouter)
 
app.listen(process.env.PORT,()=>{
    console.log(`server runing at ${process.env.PORT}`)
})