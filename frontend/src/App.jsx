
import { useState } from 'react'
import './App.css'

function App() {
  async function handleSubmit(){
    let data=await fetch('http://localhost:3000/user',{
      method:'POST',
       headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userdata)
    })
    let res=await data.json();
    alert(res.message)
  }
  const [userdata,Setuserdata]=useState({})
  return(
    <div>
      <h1>sign up</h1>
      <div>
        <input onChange={(e)=>Setuserdata((prev)=>({
          ...prev,firstname:e.target.value,
        }))} type="text" name="" placeholder='firstname'/>  
        <br />      
        <input onChange={(e)=>Setuserdata((prev)=>({
          ...prev,lastname:e.target.value,
        }))} type="text" name="" placeholder='lastname'/>
        <br />        
        <input onChange={(e)=>Setuserdata((prev)=>({
          ...prev,DateofBirth:e.target.value,
        }))}
         type="Date" name="" placeholder='date of birth'/>
        <br />        
        <input onChange={(e)=>Setuserdata((prev)=>({
          ...prev,email:e.target.value,
        }))} 
        type="email" name="" placeholder='email'/>
        <br />
        <input onChange={(e)=>Setuserdata((prev)=>({
          ...prev,password:e.target.value,
        }))}
         type="text" name="" placeholder='username'/>
         <br />
        <input onChange={(e)=>Setuserdata((prev)=>({
          ...prev,username:e.target.value,
        }))}
         type="password" name="" placeholder='password'/>
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default App
