const express=require("express");
const routes=express.Router();
const UserModel=require("../models/UserSchema")
const {CreateUser,GetUser,GetUserById,UpdateUser,DeleteUser,LoginUser}=require("../controllers/UserController")

routes.get("/",GetUser)
routes.post("/",CreateUser)
routes.post("/login",LoginUser)
routes.get("/:id",GetUserById)
routes.patch("/:id",UpdateUser)
routes.delete("/:id",DeleteUser)


module.exports=routes