const mongoose=require("mongoose")

const UserSchema=new mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:true
    },
    password:String,
    blogs:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Blog",
        }
    ]
})

const User=mongoose.model("User",UserSchema)

module.exports=User;