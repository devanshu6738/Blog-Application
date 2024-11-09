const express=require("express")
const router=express.Router();
const blog=require("../models/blogSchema")
router.post('/',(req,res)=>{
    const data=req.body;
    blog.push(data);
    return res.json({msg:"blog created successfully"});
})
router.get('/',(req,res)=>{
    let publicBlog=blog.filter(blog=>blog.draft==false)
    return res.json({publicBlog});
})
router.get('/:id',(req,res)=>{
    const id=req.params.id;
    const data=blog.find(post=>post.id==id);
    return res.json({title:data.title,content:data.content,author:data.author});
})
router.patch('/:id',(req,res)=>{
    let id=req.params.id;
    let index=blog.findIndex(blog=>blog.id==id);
    blog[index]={...blog[index],...req.body};
    return res.json({msg:"updated successfully"})
})
router.delete('/:id',(req,res)=>{
    
})
module.exports=router