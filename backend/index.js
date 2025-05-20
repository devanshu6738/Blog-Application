const express=require("express")
const app=express();
const db=require("./config/dbconnect")
const UserModel=require("./models/UserSchema")
const cors=require('cors')
const BlogRoutes=require("./Routes/BlogRoutes")
const UserRoutes=require("./Routes/UserRoutes")

app.use("/blog",BlogRoutes)
app.use("/user",UserRoutes)



app.use(cors())
app.use(express.json())

app.listen(3000,()=>{
    console.log("Your Server is Running at Port Number 3000")
})