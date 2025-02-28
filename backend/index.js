const express=require("express")
const app=express();
const port=3000;
const db=require("./db")
const userInfo=require("./models/user")
const cors=require("cors") 
app.use(express.json())
app.use(cors())

app.get('/blogs',(req,res)=>{
    return res.json({message:"hii "})
})

app.post('/blogs/:id',(req,res)=>{

})

app.post('/blogs/',(req,res)=>{
    
})
app.post('/user',async(req,res)=>{
    console.log(req.body)
    try {
        const Userdata=req.body;
        if(!Userdata.firstname){
            res.status(400).json({
                success:false,
                message:"Please enter the first name"
            })
        }
        const newUserdata=new userInfo(Userdata);
        await newUserdata.save();
        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: newUserdata
        });
    } catch (error) {
        console.log(error)
    }
})




app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
    
})

// cEUzyvrOzGL0foHl