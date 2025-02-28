const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String
    },
    DateofBirth:{
        type:String,
        required:true
    },
    username:{
        type:String,
        unique:true
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
    }
})
const userList=mongoose.model('userDetail',userSchema)
module.exports=userList
