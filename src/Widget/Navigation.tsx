import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Pages/Home'
import AdminHome from '../Pages/AdminHome'
import AdminLogin from '../Pages/AdminLogin'

const Navigation = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={ <Home /> }/>
            <Route path='/admin-login' element={ <AdminLogin /> }/>
            <Route path='/admin-home' element={ <AdminHome /> }/>
        </Routes>
    </>
  )
}

export default Navigation