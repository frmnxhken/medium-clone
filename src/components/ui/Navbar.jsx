import React from 'react'
import Search from './Search'
import WriteIcon from '@/assets/icons/write.svg'
import BellIcon from '@/assets/icons/bell.svg'

const Navbar = () => {
  return (
    <div className='w-full sticky top-0 border-b border-gray-100'>
        <div className='container px-6 py-2 flex justify-between items-center'>
            <div className='flex items-center gap-x-8'>
                <h1 className='text-xl font-medium'>Menengah</h1>
                <Search/>
            </div>
            <div className='flex gap-x-8'>
                <div className='flex gap-x-2 items-center'>
                  <img className='w-[24px]' src={WriteIcon} alt='write-icon'/>
                  <p className='text-sm'>Write</p>
                </div>
                <img className='w-[24px]' src={BellIcon} alt='bell-icon'/>
                <img className='w-[32px] h-[32px] object-cover rounded-full' 
                  src='https://i.pinimg.com/736x/17/13/77/17137776931c3f3a800835016c4f98f8.jpg' 
                  alt='profile' />
            </div>
        </div>
    </div>
  )
}

export default Navbar