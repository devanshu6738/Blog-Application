const Blog=require("../models/blogSchema")
const user=require('../models/userSchema')
async function CreateBlog(req,res){
    const{title,description,draft,creator}=req.body;
    try {
        if(!title){
            return res.status(400).json({msg:"Please Enter a Title"})
        }
        if(!description){
            return res.status(400).json({msg:"Please Enter a Description"})
        }
        const findUser=await user.findById(creator);
        if(!findUser){
            return res.status(400).json({msg:"user not found"})
        }
        const data=await Blog.create({title,description,draft,creator})
        await user.findByIdAndUpdate(creator,{$push:{blog:blog._id}})
        res.status(200).json(data)
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"Internal Server error"})
    }
}
async function GetBlogs(req,res){
    try {
        const data=await Blog.find({});
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"Internal Server error"})
    }
}
async function GetBlog(req,res){

}
async function UpdateBlog(req,res){

}
async function DeleteBlog(req,res){

}

module.exports={
    CreateBlog,
    GetBlog,
    GetBlogs,
    UpdateBlog,
    DeleteBlog
}