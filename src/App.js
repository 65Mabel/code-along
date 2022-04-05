import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar/Navbar"



const App = () => {
  return (
   <BrowserRouter>
  < Navbar/>
   <Routes>
     <Route path="about" element={<About/>}/>
     <Route path="/" element={<Home/>}/>
     <Route path="blog" element={<Blog/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App;