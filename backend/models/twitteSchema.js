import mongoose from "mongoose";

const twitteSchema=new mongoose.Schema({
    discripation:{
        type:String,
        require:true
    },
    like:{
        type:Array,
        default:[]
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    bookmarks:{
        type:Array,
        default:[]
    },
    followers:{
        type:Array,
        default:[]
    },
    following:{
        type:Array,
        default:[]
    },
},{timestamps:true})

export const Twitte=mongoose.model('Twitte',twitteSchema);