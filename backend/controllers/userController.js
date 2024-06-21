import { User } from "../models/userSchema.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"

export const Register= async(req,res)=>{

    try{
        const{name,username,email,password}=req.body;
        if(!name || !username || !email || !password){
            return res.status(401).json({
                message:"All the fileds are required.",
                success:false
            })
        }
        const user=await User.findOne({email});
        if(user){
            return res.status(401).json({
                message:"User Allrady exist.",
                success:false
            })
        }
        const hashpassword=await bcryptjs.hash(password,16);
        await User.create({
            name,
            username,
            email,
            password:hashpassword
        });
        return res.status(201).json({
            message:"Account Created",
            success:true
        })
    }catch(error){
        console.log(error)
    }
}

export const Login = async (req,res)=>{
    try {
        const{email,password}=req.body;
        if(!email || !password){
            return res.status(401).json({
                message:"All the fileds are required.",
                success:false
            })
        };
        const user=await User.findOne({email});
        if(!user){
            return res.status(401).json({
                message:"User does not exist with this email.",
                success:false
            })
        }
        const isMatch= await bcryptjs.compare(password,user.password);
        if(!isMatch){
            return res.status(401).json({
                message:"Incorrect Email or Password.",
                success:false
            })
        }
        const tokenData={
            userId:user._id
        }
        const token= await jwt.sign(tokenData,process.env.TOKEN_SECRET,{expiresIn:"1d"} )
        return res.status(201).cookie("token",token,{expiresIn:"1d"}).json({
            message:`Welcome back ${user.name}`,
            success:true
        })
    } catch (error) {
        console.log(error)
    }
}

export const Logout= (req,res)=>{
    return res.cookie("token" ,"",{expiresIn:new Date(Date.now())}).json({
        message:"user logged out Successfully",
        success:true
    })
}