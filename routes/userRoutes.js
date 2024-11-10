const express=require("express")
const router=express.Router();
const {CreateUser,GetUserAll,GetUser,UpdateUser,deleteUser}=require("../controllers/userController")

router.post("/",CreateUser)
router.get("/",GetUserAll);
router.get("/:id",GetUser)
router.patch("/:id",UpdateUser)
router.delete("/:id",deleteUser)
module.exports=router