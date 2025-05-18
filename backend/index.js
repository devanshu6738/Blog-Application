const express=require("express")
const app=express();
const db=require("./config/dbconnect")
const UserModel=require("./models/UserSchema")
const cors=require('cors')

app.use(cors())
app.use(express.json())
let blog=[]
let user=[];



app.post("/blogs",(req,res)=>{
    blog.push({...req.body,id:blog.length+1})
    return res.json({"message":"blog created successfully"})
})
app.get("/blogs",(req,res)=>{
    let publicBlog=blog.filter(blog => blog.draft===false)
    return res.json({publicBlog})
    
})
app.get("/blogs/:id",(req,res)=>{
    const {id}=req.params;
    const SearchBlog=blog.filter(blog=> blog.id==id)
    console.log(SearchBlog)
    return res.json({SearchBlog})
})
app.patch("/blogs/:id",(req,res)=>{
    const{id}=req.params;
    let UpdatedBlog=blog.findIndex(blog =>blog.id==id)
    blog[UpdatedBlog]={...blog[UpdatedBlog],...req.body}
    return res.json({UpdatedBlog})
})
app.delete("/blogs/:id",(req,res)=>{

})

app.get("/user",async(req,res)=>{
    try {
        const userData=await UserModel.find()
        return res.status(200).json({
            success:true,
            message:"User Fetched Successfully",
            userData
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            error
        })
    }
})
app.post("/user",async(req,res)=>{
    let {name,password,email}=req.body;
    
    try {
            if(!name){
                return res.json({
                    success:false,
                    message:"Enter your name"
                })
            }
            if(!email){
                return res.json({
                    success:false,
                    message:"Enter your email"
                })
            }
            if(!password){
                return res.json({
                    success:false,
                    message:"Enter your password"
                })
                
            }
            const newUser=await UserModel.create({
                    name,
                    email,
                    password,
                })
        
        return res.status(200).json({
            success:true,
            message:"User created Successfully",
            newUser
        })

    } catch (error) {
        return res.status(400).json({
            success:false,
            message:"Please Try again",
            error
        })
    }

})
app.get("/user/:id",(req,res)=>{
    try {
        const userId=user.filter(user=>user.id==req.params.id)
        return res.status(200).json({
            success:true,
            message:"Selected User fetched Successfully",
            userId
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:"User not found"
        })
    }
})


app.listen(3000,()=>{
    console.log("Your Server is Running at Port Number 3000")
})