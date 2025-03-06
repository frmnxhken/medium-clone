import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../ui/Navbar'

const PostLayout = () => {
  return (
    <>
        <Navbar/>
        <div className='container max-w-[680px] mx-auto flex justify-evenly px-6'>
            <Outlet/>
        </div>
    </>
  )
}

export default PostLayout