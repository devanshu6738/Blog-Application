const express=require("express");
const routes=express.Router();
const {CreateBlog,DeleteBlog,GetBlog,UpdateBlog,GetBlogById} =require("../controllers/BlogController")

routes.post("/",CreateBlog)
routes.get("",GetBlog)
routes.get("/:id",GetBlogById)
routes.patch("/:id",UpdateBlog)
routes.delete("/:id",DeleteBlog)

module.exports=routes