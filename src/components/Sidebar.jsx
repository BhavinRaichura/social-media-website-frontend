import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
      <div className=' w-full h-screen p-3 border-r '>
        <div className='py-4 border-b bg-white shadow-lg rounded-md border my-5'>
          <div className='flex flex-col justify-center' >
            <div className=' flex flex-row justify-evenly '>
              <div className='w-32 h-32 overflow-hidden rounded-full border-2'>
                <img src={localStorage.getItem('image')} alt="profile" className="w-full h-full rounded-full object-cover bg-slate-800 border-2" />
              </div>
            </div>
            <div className="p-7 flex justify-center ">
              <div className="flex pb-2 max-sm:flex-wrap">
                <p className="text-xl font-medium max-md:text-3xl max-sm:text-xl">@{localStorage.getItem('name')}</p>
              </div>
              {/*<div className="flex">
                <button className="p-3 text-zinc-500">12 post</button>
                <button className="p-3 text-zinc-500">1057 followers</button>
                <button className="p-3 text-zinc-500">839 followings</button>
              </div>*/}
            </div>
          </div>


        </div>

        <div className='flex  justify-center py-5 bg-white shadow-lg rounded-md border my-5'>
          <ul className='w-96'>
            <Link to={`/user/${localStorage.getItem('userid')}`}>
              <li className='p-2 hover:bg-zinc-50 cursor-pointer'>Profile</li>
            </Link>
            <Link to='/create-post'>
              <li className='p-2 hover:bg-zinc-50 cursor-pointer'>Create post</li>
            </Link>
            <Link to="/friend-suggetions" >
              <li className="p-2 hover:bg-zinc-50 cursor-pointer">Suggetions</li>
            </Link>
            <Link to="/friend-requests" >
              <li className="p-2 hover:bg-zinc-50 cursor-pointer">Requests</li>
            </Link>
            <Link to="/logout" >
              <li className="p-2 hover:bg-zinc-50 cursor-pointer">Logout</li>
            </Link>
            


          </ul>
        </div>


      </div>

    </>
  )
}

export default Sidebar
