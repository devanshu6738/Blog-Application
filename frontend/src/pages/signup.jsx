import React, { useEffect, useState } from 'react'

function Signup() {
  const[userData,SetUserData]=useState({name:'',email:'',password:''})
  async function handleSubmit(){
    let data=await fetch("http://localhost:3000/user",{
      method:"POST",
      body:JSON.stringify(userData),
      headers:{
        "Content-Type":"application/json",
      }
    })
    let response=await data.json()
    console.log(response)
    if(response.success){
        localStorage.setItem("user",JSON.stringify(response.User))
    }
    alert(response.message)
    
  }
  
  return (
    <>
      <h1 className='text-xl font-bold'>Sign Up</h1>
      <div className='p-20 border w-[40%]'>
        <input onChange={(e)=>SetUserData(prev=>({...prev,name:e.target.value}))} type="text" name="" placeholder='Enter Your Name' className=''/>
        <br />
        <input onChange={(e)=>SetUserData(prev=>({...prev,email:e.target.value}))} type="email" name="" placeholder='Enter Your email'/>
        <br />
        <input onChange={(e)=>SetUserData(prev=>({...prev,password:e.target.value}))} type="password" name="" placeholder='Enter Your password'/>
        <br />
        <button onClick={handleSubmit}>Submit</button>
        
      </div>
    </>
  )
}

export default Signup
