const mongoose=require("mongoose")

const BlogSchema=new mongoose.Schema({
    blog:{
        type:String,
        required:true
    }
})

const User=mongoose.model("Blog",BlogSchema)
module.exports=User