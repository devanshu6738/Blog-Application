const express=require("express");
const app=express();
const db=require("./config/dbConnect")
app.use(express.json())
const userRoutes=require("./routes/userRoutes")
const blogRoutes=require("./routes/userRoutes")

app.use("/user",userRoutes);
app.use("/blog",blogRoutes)

app.listen(3000,()=>{
    console.log("Server is running at port 3000")
})