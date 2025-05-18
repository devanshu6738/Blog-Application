const mongoose=require("mongoose")
const url="mongodb://localhost:27017/MyBlogApp"


mongoose.connect(url)
const db=mongoose.connection;

db.on('connected',()=>{
    console.log("MongoDb server is connected")
})

db.on('disconnected',()=>{
    console.log("Mongodb is disconnected")
})

db.on("error",(error)=>{
    console.log(error)
})

module.exports=db
