import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

function CreateBlog() {
    let user=JSON.parse(localStorage.getItem("user"))
    const [blogData,SetBlogData]=useState({
      title:"",
      description:""
    })
    async function handleSubmit(){
      let data=await fetch("http://localhost:3000/blog/",{
        method:"POST",
        body:JSON.stringify({blogData}),
        headers:{
           "Content-Type":"application/json",
           "Authorization":`Bearer ${user.token}`
        }
      });
      let res=await data.json();
      // if(res.success){
      //   localStorage.setItem("user",JSON.stringify(res.user));
      // }
      // alert(res.message)
    }
    if(!user){
      return <Navigate to={"/signup"}/>
    }
  return (
    <div>
      <h1>Create Blog</h1>
      <div className='p-20 border w-[40%]'>
        <input onChange={(e)=>SetBlogData(prev=>({...prev,name:e.target.value}))} type="text" name="" placeholder='Enter Title' className=''/>
        <br />
        <input onChange={(e)=>SetBlogData(prev=>({...prev,email:e.target.value}))} type="text" name="" placeholder='Enter description'/>
        <br />
     
        <button onClick={handleSubmit}>Submit</button>
        
      </div>
    </div>
  )
}

export default CreateBlog
