import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/home/Home'
import { LoginPage, SignUpPage } from '../pages/Pages';
import componentsData from './../lib/componentspath/ComponentPath';
import ProtectedRouter from '../lib/protectedRouter/ProtectedRouter';

function Routers() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignUpPage/>}/>
      <Route element={<ProtectedRouter/>}>
      {componentsData?.map((item,index)=>
        (
          <Route path={item?.path} key={index+1} element={item?.component}></Route>
        )
      )}
      
      </Route>
    </Routes>
  )
}

export default Routers;