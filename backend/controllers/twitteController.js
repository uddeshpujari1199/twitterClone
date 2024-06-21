import {Twitte} from "../models/twitteSchema.js";
export const createTweet = async(req,res)=>{
    try {
        const {description, id}= req.body;
        if(!description || !id){
            return res.status(401).json({
                massage:"Fields are required.",
                sussess:false
            });
        };
        await Twitte.create({
            description,
            userId:id
        })
        return res.status(201).json({
            massage:"Tweet created Successfully.",
            sussess:true
        })
    } catch (error) {
        console.log(error)
    }
}

export const deleteTweet=async(req,res)=>{
    try {
        const{id}=req.params;
        await Twitte.findByIdAndDelete(id);
        return res.status(201).json({
            massage:"Tweet Deleted Sussessfully",
            sussess:true
        })
    } catch (error) {
        
    }
}