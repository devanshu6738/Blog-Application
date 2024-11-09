const user=require("../models/userSchema")

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
    
    const newUser=new user(data);
    const response=await newUser.save();
    return res.status(200).json({msg:"data saved succesfully",response})
    } catch (error) {
        return res.status(500).json({msg:"Internal server error"})
    }
}

async function GetUser(req,res){
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

module.exports= {CreateUser,GetUser}
