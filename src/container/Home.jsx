import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
//import { Routes,Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Timeline from '../components/Timeline'
import SuggetionsList from './SuggetionsList'

const Home = () => {

  const status = useSelector((state)=>state);
  console.log('use selector : ',status)
  
  return (
    <div className=''>
        <div className='flex flex-row '>
          <div className="lg:w-2/6 h-screen sticky top-0 max-lg:hidden bg-zinc-100">
            <Sidebar/>
          </div>
          <div className="lg:w-3/6">
            <Timeline/>
          </div>
          <div className="lg:w-2/6 h-screen  max-lg:hidden bg-zinc-50">
            <SuggetionsList />
          </div>
          
      </div>
    </div>
  )
}

export default Home
