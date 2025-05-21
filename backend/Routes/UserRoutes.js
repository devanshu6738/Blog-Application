const express=require("express");
const routes=express.Router();
const UserModel=require("../models/UserSchema")
const {CreateUser,GetUser,GetUserById,UpdateUser,DeleteUser}=require("../controllers/UserController")

routes.get("/",GetUser)
routes.post("/",CreateUser)
routes.get("/:id",GetUserById)
routes.patch("/:id",UpdateUser)
routes.delete("/:id",DeleteUser)


module.exports=routes