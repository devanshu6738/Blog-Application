const express=require("express")
const router=express.Router();
const {CreateUser,GetUser}=require("../controllers/userController")

router.post("/",CreateUser)
    

router.get("/",GetUser);
router.get("/:id",async(req,res)=>{
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
})
router.patch("/",(req,res)=>{
    try {
        
    } catch (error) {
        
    }
})
router.delete("/",(req,res)=>{
    try {
        
    } catch (error) {
        
    }
})
module.exports=router