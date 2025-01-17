import React from 'react'
import TopBar from './components/topbar/TopBar'
import  Navbar  from './components/navbar/Navbar.jsx'
import { Outlet } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from './components/footer/Footer.jsx'


const Layout = () => {
  return (
    <>
         <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout