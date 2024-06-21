import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config({
    path:"../config/.env"
})

const databaseconnection=()=>{
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("connection to mongoDB")
    }).catch((error)=>{
        console.log(error);
    })
}
export default databaseconnection;