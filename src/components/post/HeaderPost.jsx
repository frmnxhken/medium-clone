import React from 'react'
import BookmarkIcon from '@/assets/icons/bookmark.svg'

const HeaderPost = () => {
  return (
    <div className='py-4'>
        <h1 className='text-4xl font-bold'>Exploring the Hidden Gems of Urban Parks</h1>
        <div className='flex items-center gap-x-4 py-8'>
            <img className='w-[44px] h-[44px] object-cover rounded-full' src='https://i.pinimg.com/474x/84/29/f8/8429f8a8e2b5d1064c961927ad9a4fee.jpg' alt='profile-photo' />
            <div>
                <h2 className='text-md font-medium'>Jane Smith</h2>
                <p className='text-sm'>Mar 15, 2024</p>
            </div>
        </div>
        <div className='border-y border-gray-100 p-2 flex justify-between items-center'>
            <p>10 Comments</p>
            <img className='w-[24px]' src={BookmarkIcon} alt='bookmark-icon' />
        </div>
    </div>
  )
}

export default HeaderPost