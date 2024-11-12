const mongoose=require("mongoose");

const BlogSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
    },
    description:{
        type:String,
        required:true,
    },
    draft:{
        type:Boolean,
        default:false,
    },
    creator:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
    }
},{timestamps:true})

const Blog=mongoose.model("Blog",BlogSchema);
module.exports=Blog;
