import { useEffect, useState } from 'react'
import './App.css'
import Signup from './pages/signup'
import { Route, Routes } from 'react-router-dom'
import Blogs from './component/Blogs'
import CreateBlog from './component/CreateBlog'

function App() {
  return(
  <Routes>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/'></Route>
    <Route path='/signin'></Route>
    <Route path='/blogs' element={<Blogs/>}></Route>
    <Route path='/createblog'element={<CreateBlog/>}></Route>
  </Routes>
  )
}

export default App
