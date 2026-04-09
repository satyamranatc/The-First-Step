import React from 'react'
import NavBar from './NavBar'

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';

import { BrowserRouter,Routes,Route } from 'react-router'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      
      </BrowserRouter>
      
    </div>
  )
}
