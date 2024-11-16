const Blog=require("../models/blogSchema")
const user=require('../models/userSchema');
const { verifyjwt } = require("../utils/jwt");

async function CreateBlog(req, res) {
    try {
        if (!req.body.token) {
            return res.status(401).json({ msg: "Please sign in" });
        }
        const isValid = await verifyjwt(req.body.token); 
        if (!isValid) {
            return res.status(401).json({ msg: "Invalid token. Please sign in again." });
        }

        const { title, description, draft, creator } = req.body
        if (!title) {
            return res.status(400).json({ msg: "Please enter a title" });
        }
        if (!description) {
            return res.status(400).json({ msg: "Please enter a description" });
        }

        const findUser = await user.findById(creator);
        if (!findUser) {
            return res.status(404).json({ msg: "User not found" });
        }

        const data = await Blog.create({ title, description, draft, creator });

        await user.findByIdAndUpdate(creator, { $push: { blog: data._id } });

        return res.status(201).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal Server Error" });
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