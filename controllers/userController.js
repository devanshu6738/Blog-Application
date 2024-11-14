const user=require("../models/userSchema")
const blog=require("../models/blogSchema")
const bcrypt=require("bcrypt");
async function CreateUser(req,res){
    try {
        const {name,email,password}=req.body;
    if(!name || !email || !password){
        return res.status(404).json({
            success:"false",
            msg:"please enter all the field"
        })
    }
    const data=req.body;
    const checkExistedUser=await user.findOne({email:data.email})
    if(checkExistedUser){
       return res.status(400).json({msg:"user already exist"})
    }
    let salt=await bcrypt.genSalt(10);
    let hashedpass=await bcrypt.hash(password,salt)
    const newUser=new user({
        name,
        email,
        password:hashedpass,
    });
    const response=await newUser.save();
    return res.status(200).json({msg:"data saved succesfully",response})
    } catch (error) {
        return res.status(500).json({msg:"Internal server error"})
    }
}

async function login(req,res){
    try {
        const {email,password}=req.body;
    if(!password ){
        return res.status(404).json({
            success:"false",
            msg:"please enter pass"
        })
    }
    if(!email){
        return res.status(404).json({
            success:"false",
            msg:"please enter email"
        })
    }
    const checkExistedUser=await user.findOne({email})
    if(!checkExistedUser){
       return res.status(400).json({msg:"user not exist"})
    }
    const checkedPassword=await bcrypt.compare(password,checkExistedUser.password)
    if(!checkedPassword){
        return res.status(404).json({msg:"Incorrect password"})
    }
    return res.status(200).json({msg:"user Login successfully",checkExistedUser})
    } catch (error) {
        return res.status(500).json({msg:"Internal server error"})
    }
}
async function GetUserAll(req,res){
    try {
        const users=await user.find({});
        return res.status(200).json({
            success:true,
            msg:"user fetched successfully",
            users,
        })
    } catch (error) {
        return res.status(500).json({msg:"Internal server error"})
    }
}

async function GetUser(req,res){
    try {
        const id=req.params.id;
       const users=await user.findOne({email:id})
        res.status(200).json({
            success:true,
            msg:"user fetched successfully",
            users
        })
    } catch (error) {
        res.status(500).json({msg:"Internal server error"})
    }
}

async function UpdateUser(req,res){
    try {
        let id=req.params.id;
        let response=await user.findByIdAndUpdate(id,req.body,{new:true})
        console.log(response);
        if (!response) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });

    }
}

async function deleteUser(req,res){
    try {
        const id=req.params.id;
        const response=await user.findByIdAndDelete(id);
        if (!response) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
}

module.exports= {CreateUser,GetUserAll,GetUser,UpdateUser,deleteUser,login}
