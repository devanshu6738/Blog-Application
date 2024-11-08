const express=require("express");
const app=express();
const mongoose=require("mongoose");
app.use(express.json())
const url="mongodb://localhost:27017/BlogApp"
mongoose.connect(url);
const db=mongoose.connection;

db.on("connected",()=>{
    console.log("Mongodb server is connected")
})
db.on("disconnected",()=>{
    console.log("Mongodb server is disconnected")
})
db.on("error",(error)=>{
    console.log(error)
})

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }
})
const user=mongoose.model("user",userSchema)


app.post('/blog',(req,res)=>{
    const data=req.body;
    blog.push(data);
    return res.json({msg:"blog created successfully"});
})
app.get('/blog',(req,res)=>{
    let publicBlog=blog.filter(blog=>blog.draft==false)
    return res.json({publicBlog});
})
app.get('/blog/:id',(req,res)=>{
    const id=req.params.id;
    const data=blog.find(post=>post.id==id);
    return res.json({title:data.title,content:data.content,author:data.author});
})
app.patch('/blog/:id',(req,res)=>{
    let id=req.params.id;
    let index=blog.findIndex(blog=>blog.id==id);
    blog[index]={...blog[index],...req.body};
    return res.json({msg:"updated successfully"})
})
app.delete('/blog/:id',(req,res)=>{
    
})


app.post("/user",async(req,res)=>{
    try {
        const {name,email,password}=req.body;
    if(!name || !email || !password){
        return res.status(404).json({
            success:"false",
            msg:"please enter all the field"
        })
    }
    const data=req.body;
    const checkExistedUser=await user.findOne({email:data.email})
    if(checkExistedUser){
        res.status(400).json({msg:"user already exist"})
    }
    
    const newUser=new user(data);
    const response=await newUser.save();
    return res.status(200).json({msg:"data saved succesfully",response})
    } catch (error) {
        res.status(500).json({msg:"Internal server error"})
    }
})

app.get("/user",async(req,res)=>{
    try {
        const users=await user.find({});
        res.status(200).json({
            success:true,
            msg:"user fetched successfully",
            users,
        })
    } catch (error) {
        res.status(500).json({msg:"Internal server error"})
    }
})
app.get("/user/:id",async(req,res)=>{
    try {
        const id=req.params.id;
       const users=await user.findOne({email:id})
        res.status(200).json({
            success:true,
            msg:"user fetched successfully",
            users
        })
    } catch (error) {
        res.status(500).json({msg:"Internal server error"})
    }
})


app.listen(3000,()=>{
    console.log("Server is running at port 3000")
})