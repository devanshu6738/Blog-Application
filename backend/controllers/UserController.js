const UserModel=require("../models/UserSchema")
const bcrypt=require("bcrypt");
const {generateJwt,isVrifyToken, isVerifyToken} = require("../utils/generateToken");

async function CreateUser(req,res){
    let {name,password,email}=req.body;
    
    try {
        let isValid=isVerifyToken(token);
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
            const checkForexistingUser=await UserModel.findOne({email})
            if(checkForexistingUser){
                return res.status(400).json({
                    success:false,
                    message:"User already registered with this email"
                })
            }
            let salt=await bcrypt.genSalt(10)
            const hashedPass=await bcrypt.hash(password,salt)
            const newUser=await UserModel.create({
                    name,
                    email,
                    password:hashedPass,
                })
            let token=await generateJwt({email:newUser.email,id:newUser._id})
        return res.status(200).json({
            success:true,
            message:"User created Successfully",
            User:{
                name:newUser.name,
                email:newUser.email,
                blog:newUser.blogs,
                token
            }
        })

    } catch (error) {
        return res.status(400).json({
            success:false,
            message:"Please Try again",
            error
        })
    }
}

async function LoginUser(req,res){
    let {password,email}=req.body;
    
    try {
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
            const checkForexistingUser=await UserModel.findOne({email})
            if(!checkForexistingUser){
                return res.status(400).json({
                    success:false,
                    message:"User not exist"
                })
            }
        let CheckForPass=await bcrypt.compare(password,checkForexistingUser.password)
        if(CheckForPass==false){
            return res.status(400).json({
                success:false,
                message:"Your Password is Incorrect"
            })
        }
        return res.status(200).json({
            success:true,
            message:"User Logged In Successfully",
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
module.exports={CreateUser,GetUser,GetUserById,UpdateUser,UpdateUser,DeleteUser,LoginUser}