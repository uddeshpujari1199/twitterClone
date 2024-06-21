import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config({
    path:"../config/.env"
})

const isAuthentication = async(req,res,next)=>{
    try {
        const token=req.cookies.token;
        console.log(token);
        if(!token){
            return res.status(401).json({
                massage:"User not authenticate",
                sussess:flase
            })
        }
        const decode=await jwt.verify(token,process.env.TOKEN_SECRET);
        console.log(decode)
        req.user=decode.userId;
        next();
    } catch (error) {
        console.log(error)
    }
}
export default isAuthentication;