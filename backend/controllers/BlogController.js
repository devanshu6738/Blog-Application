const BlogModel=require("../models/BlogSchema")

async function CreateBlog(req,res){
    let{title,description,draft,author}=req.body;
    try {
        let CreateBlog=await BlogModel.create({
            title,
            description,
            draft,
            author
        })
        return res.status(200).json({
            success:true,
            message:"Blog Created Successfully",
            CreateBlog
        })

    } catch (error) {
        return res.status(400).json({
            success:false,
            error:error.message
        })
    }
}

async function GetBlog(req,res){
    try {
        const GetBlog=await BlogModel.find({draft:false});
        res.status(200).json({
            success:true,
            GetBlog
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            error:error.message
        })
    }
}

async function DeleteBlog(req,res){
    try {
        const {id}=req.params;
        const BlogId=await BlogModel.findByIdAndDelete(id);
        if(!BlogId){
            return res.status(400).json({
                success:false,
                message:"User Not found"
            })
        }
        return res.status(200).json({
            success:true,
            message:"User Deleted Successfully"
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            error:error.message
        })
    }
}
async function UpdateBlog(req,res){
    try {
        const{title,description,draft,author}=req.body;
        const {id}=req.params;
        const UpateBlog=await BlogModel.findByIdAndUpdate(id,{title,description,draft,author},{new:true})
        return res.status(200).json({
            success:true,
            message:"User Updated Successfully",
            UpdateBlog
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            error:error.message,
        })
    }
}

async function GetBlogById(req,res){
    try {
        const {id}=req.params;
        const BlogId=await BlogModel.findById(id);
        if(!BlogId){
            return res.status(200).json({
            success:false,
            message:"User Not Found",
        })
        }
        return res.status(200).json({
            success:true,
            message:"User Found Successfully",
            BlogId
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            error:error.message
        })
    }
}

module.exports={CreateBlog,GetBlog,DeleteBlog,UpdateBlog,GetBlogById}