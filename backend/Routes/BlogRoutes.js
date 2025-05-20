const express=require("express");
const routes=express.Router();

routes.post("/",(req,res)=>{
    blog.push({...req.body,id:blog.length+1})
    return res.json({"message":"blog created successfully"})
})
routes.get("",(req,res)=>{
    let publicBlog=blog.filter(blog => blog.draft===false)
    return res.json({publicBlog})
    
})
routes.get("/:id",(req,res)=>{
    const {id}=req.params;
    const SearchBlog=blog.filter(blog=> blog.id==id)
    console.log(SearchBlog)
    return res.json({SearchBlog})
})
routes.patch("/:id",(req,res)=>{
    const{id}=req.params;
    let UpdatedBlog=blog.findIndex(blog =>blog.id==id)
    blog[UpdatedBlog]={...blog[UpdatedBlog],...req.body}
    return res.json({UpdatedBlog})
})
routes.delete("/blogs/:id",(req,res)=>{

})

module.exports=routes