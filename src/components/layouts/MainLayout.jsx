import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../ui/Navbar'
import Sidebar from '../ui/Sidebar'

const MainLayout = () => {
  return (
    <>
        <Navbar/>
        <div className='container max-w-[1200px] mx-auto flex justify-evenly px-4'>
          <div className='w-[60%] h-[200vh]'>
            <Outlet/>
          </div>
          <Sidebar/>
        </div>
    </>
  )
}

export default MainLayout