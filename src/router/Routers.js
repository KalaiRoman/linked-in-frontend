import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/home/Home'

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} index>
      </Route>
    </Routes>
  )
}

export default Routers;