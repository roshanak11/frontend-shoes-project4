import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from "./components/Navbar"
import Home from './components/Home'
import ShoeIndex from './components/ShoeIndex'
import ShoeShow from './components/ShoeShow'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shoes" element={<ShoeIndex />} />
        <Route path="/shoes/:shoeId" element={<ShoeShow />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
