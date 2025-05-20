const express=require("express");
const routes=express.Router();
const UserSchema=require("../models/UserSchema")

routes.get("/",async(req,res)=>{
    try {
        const userData=await UserModel.find({})
        return res.status(200).json({
            success:true,
            message:"User Fetched Successfully",
            userData
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            error
        })
    }
})
routes.post("/",async(req,res)=>{
    let {name,password,email}=req.body;
    
    try {
            if(!name){
                return res.json({
                    success:false,
                    message:"Enter your name"
                })
            }
            if(!email){
                return res.json({
                    success:false,
                    message:"Enter your email"
                })
            }
            if(!password){
                return res.json({
                    success:false,
                    message:"Enter your password"
                })
                
            }
            const newUser=await UserModel.create({
                    name,
                    email,
                    password,
                })
        
        return res.status(200).json({
            success:true,
            message:"User created Successfully",
            newUser
        })

    } catch (error) {
        return res.status(400).json({
            success:false,
            message:"Please Try again",
            error
        })
    }

})
routes.get("/:id",async(req,res)=>{
    try {
        const id=req.params.id
        const user=await UserModel.findOne({_id:id})
        if(!user){
            return res.status(400).json({
                success:false,
                message:"User not found",
            })
        }
        return res.status(200).json({
                success:true,
                message:"User found Successfully",
                user
            })
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:"User not found",
            error:error.message
        })
    }
})

routes.patch("/:id",async(req,res)=>{
    try {
        const {name,email,password}=req.body
        const id=req.params.id;

        const UpdatedUser=await UserModel.findByIdAndUpdate({_id:id},{name,email,password},{new:true});
        const user=await UserModel.findOne({_id:id});
        
        console.log(UpdatedUser)
        return res.json({
            UpdatedUser
        })
    } catch (error) {
        
    }
})
routes.delete("/:id",async(req,res)=>{
    try {
        const id=req.params.id;
        const DeleteUser=await UserModel.findByIdAndDelete(id);
        if(!DeleteUser){
            return res.status(400).json({
                success:false,
                message:"User not found"
            })
        }
         return res.status(200).json({
                success:true,
                message:"User Delete Successfully"
            })
    } catch (error) {
        return res.status(500).json({
            success:false,
            error:error.message
        })
    }
})


module.exports=routes