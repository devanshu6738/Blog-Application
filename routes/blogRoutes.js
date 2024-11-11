const express=require("express")
const router=express.Router();
const {CreateBlog,DeleteBlog,UpdateBlog,GetBlogs,GetBlog}=require("../controllers/blogController");

router.get("/",GetBlogs);
router.get("/:id",GetBlog)
router.post("/",CreateBlog)
router.patch("/:id",UpdateBlog)
router.delete("/:id",DeleteBlog)

module.exports=router