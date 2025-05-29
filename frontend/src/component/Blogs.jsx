import React, { useEffect, useState } from 'react'

function Blogs() {
    async function FetchBlog(){
        let data =await fetch("http://localhost:3000/blog/")
        let res=await data.json();
        SetGetBlog(res.GetBlog)
      }
      useEffect(()=>{
        FetchBlog();
      },[])
    const[GetBlog,SetGetBlog]=useState([])
  return (
    <div>
      {
        GetBlog.map((blog,i)=>(
            <ul key={i}>
              <li className='text-xl font-bold'>{blog.title}</li>
              <li>{blog.description}</li>
            </ul>
          ))
        }
    </div>
  )
}

export default Blogs
