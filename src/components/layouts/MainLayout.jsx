import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../ui/Navbar'

const MainLayout = () => {
  return (
    <>
        <Navbar/>
        <div className='container max-w-[1200px] mx-auto flex flex-col-reverse sm:flex-row justify-evenly px-6'>
            <Outlet/>
        </div>
    </>
  )
}

export default MainLayout