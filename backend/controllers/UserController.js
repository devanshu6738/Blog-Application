const UserModel=require("../models/UserSchema")

async function CreateUser(req,res){
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
}

async function GetUser(req,res){
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
}

async function GetUserById(req,res){
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
}

async function UpdateUser(req,res){
    try {
        const {name,email,password}=req.body
        const id=req.params.id;

        const UpdatedUser=await UserModel.findByIdAndUpdate({_id:id},{name,email,password},{new:true});
        const user=await UserModel.findOne({_id:id});
        
        return res.json({
            UpdatedUser
        })
    } catch (error) {
        
    }
}

async function DeleteUser(req,res){
    try {
        const {id}=req.params;
        const DeleteUser=await UserModel.findByIdAndDelete(id)
        if(!DeleteUser){
            return res.status(400).json({
                success:false,
                message:"User Not Found!"            })
        }
        return res,status(200).json({
            success:true,
            message:"User Deleted Successfully"
        })
    } catch (error) {
        return res.json({
            error:error.message
        })
    }
}
module.exports={CreateUser,GetUser,GetUserById,UpdateUser,UpdateUser,DeleteUser}