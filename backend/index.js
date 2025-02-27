const express=require("express")
const app=express();
const port=3000;
const db=require("./db")
const blog=[]
app.use(express.json())
app.get('/blogs',(req,res)=>{
    return res.json({message:"hii "})
})
app.post('/blogs/:id',(req,res)=>{

})
app.post('/blogs/',(req,res)=>{
    console.log(req.body)
})
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
    
})