const mongoose=require("mongoose")

const BlogSchema=new mongoose.Schema({
    title:{
        type:String,
        trim:true,
        required:true
    },
    description:{
        type:String,
    },
    draft:{
        type:Boolean,
        default:false
    },
    author:{
        type:String,
        required:true
    }
    
},{timestamps:true})

const BlogModel=mongoose.model("Blog",BlogSchema)
module.exports=BlogModel