const Blog=require("../models/blogSchema")
async function CreateBlog(req,res){
    const{title,description,draft}=req.body;
    try {
        if(!title){
            return res.status(400).json({msg:"Please Enter a Title"})
        }
        if(!description){
            return res.status(400).json({msg:"Please Enter a Description"})
        }
        const data=await Blog.create({title,description})
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