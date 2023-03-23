import React from 'react'

import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'


import {IoMdNotifications, IoMdSettings , IoMdAdd, IoMdHome} from 'react-icons/io'
import {FaUser} from 'react-icons/fa' 
import {GoSearch} from 'react-icons/go'

const Navbar = () => {
    return (
        <>
            <div className='max-lg:hidden'>

                <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-zinc-900">
                    <div className="container flex flex-wrap items-center justify-between mx-auto">  
                            
                            <h1 className='text-center p-2 text-xl font-thin text-white border rounded-lg'>LinkedMe</h1>
                        
                        <div className="flex items-center md:order-2">
                            <Searchbar />
                        </div>
                        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white  md:dark:bg-zinc-900">
                                <li>
                                    <Link to="/" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</Link>
                                </li>
                                <li>
                                    <Link to="/create-post" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Create</Link>
                                </li>
                                <li>
                                    <Link to={`/user/${localStorage.getItem('userid')}`} className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Profile</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className='lg:hidden'>
                {mobileNav()}
            </div>
        </>

)
}

const mobileNav = () => {
    return (
        <div className='fixed bottom-0 w-full'>
            <div className='w-full dark:bg-zinc-900'>
                <ul className='flex justify-evenly p-2 text-sm'>
                    <li>
                        <Link to="/" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 " aria-current="page"><IoMdHome className='w-6 h-6 m-auto'  /><span>Home</span></Link>
                    </li>
                    <li>
                        <Link to="/search" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700  " aria-current="page"><GoSearch className='w-6 h-6 m-auto'  /><span>Search</span></Link>
                    </li>
                    <li>
                        <Link to="/create-post" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700  " aria-current="page"><IoMdAdd className='w-6 h-6 m-auto'  /><span>Create</span></Link>
                    </li>
                    <li>
                        <Link to="/friend-suggetions" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 " aria-current="page"><IoMdNotifications className='w-6 h-6 m-auto'  /><span>Notify</span></Link>
                    </li>
                    <li>
                        <Link to="/setting" state={{ 'user_id': localStorage.getItem('userid') }} className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 "><FaUser className='w-6 h-6 m-auto'  /><span>profile</span></Link>
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Navbar
