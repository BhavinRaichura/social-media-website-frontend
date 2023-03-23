import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Main = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <div className='p-16'></div>
    </>
  )
}

export default Main
