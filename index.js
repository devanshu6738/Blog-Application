const express=require("express");
const app=express();

app.use(express.json())

const blog=[
    {
        "id": 1,
        "title": "Understanding JavaScript Basics",
        "content": "JavaScript is a powerful language for web development. In this article, we will explore the basics of JavaScript...",
        "draft": false,
        "author": "Amit Sharma"
      },
      {
        "id": 2,
        "title": "Introduction to Web Development",
        "content": "Web development involves creating websites and web applications. This guide will cover the essential aspects...",
        "draft": true,
        "author": "Neha Verma"
      },
      {
        "id": 3,
        "title": "How to Use Git and GitHub",
        "content": "Git and GitHub are essential tools for developers. In this post, we'll go over how to use Git for version control...",
        "draft": false,
        "author": "Rahul Singh"
      },
      {
        "id": 4,
        "title": "Building a Simple To-Do App with JavaScript",
        "content": "Creating a to-do app is a great way to practice JavaScript skills. Here’s a step-by-step guide...",
        "draft": true,
        "author": "Priya Jain"
      },
      {
        "id": 5,
        "title": "Exploring CSS Flexbox for Layouts",
        "content": "CSS Flexbox is a powerful layout tool that makes it easier to design responsive layouts. This article dives into...",
        "draft": false,
        "author": "Vikas Kumar"
      }
];

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

app.listen(3000,()=>{
    console.log("Server is running at port 3000")
})