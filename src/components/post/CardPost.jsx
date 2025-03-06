import React from 'react'
import { formatDate } from '@/utils/Format'
import BookmarkIcon from '@/assets/icons/bookmark.svg'
const CardPost = () => {
  return (
    <div>
        <img className='aspect-video object-cover' src='https://i.pinimg.com/736x/3e/02/bc/3e02bc60221af675a3cd2e33db6fe7a9.jpg' alt='thumbnail' />
        <div className='flex items-center gap-x-2 mt-4'>
            <img
                className='w-[24px] h-[24px] rounded-md object-cover' 
                src='https://i.pinimg.com/474x/84/29/f8/8429f8a8e2b5d1064c961927ad9a4fee.jpg' 
                alt='photo-profile' />
            <p className='text-sm'>Jane Smith</p>
        </div>
        <h1 className='text-xl font-bold mt-4'>Exploring the Hidden Gems of Urban Parks</h1>
        <p className='text-sm mt-2'>Escape the hustle and bustle of city life and discover the tranquil oases hidden within urban parks. Uncover the secrets..</p>
        <div className='mt-6 flex justify-between items-center'>
            <p className='text-sm'>{formatDate('03-06-2024')}</p>
            <img className='w-[24px]' src={BookmarkIcon} alt='bookmark-icon'/>
        </div>
    </div>
  )
}

export default CardPost