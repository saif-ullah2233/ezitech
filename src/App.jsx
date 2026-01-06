import React from "react" 
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";

import { Home } from "./Home"
import { About } from "./about";
function App() {
 

  return (
    <>
    <div>
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="about" element={<About />}/>
        </Routes>
      </BrowserRouter>
    </div>
       
    </>
  )
}

export default App
