import React from 'react'
import BookmarkIcon from '@/assets/icons/bookmark.svg'
import { Ellipsis, formatDate } from '@/utils/Format'
import { useNavigate } from 'react-router-dom'

const Card = (props) => {
  const { data } = props
  const navigate = useNavigate()
  
  return (
    <div className='border-b border-gray-100 py-6'>
        <div 
            onClick={() => navigate('/profile')}
            className='flex items-center gap-x-2 cursor-pointer'>
            <img
                className='w-[24px] h-[24px] rounded-md object-cover' 
                src={data.profile} 
                alt='photo-profile' />
            <p className='text-sm'>{data.author}</p>
        </div>
        <div className='flex gap-x-8 mt-4'>
            <div className='w-[80%] sm:w-[70%]'>
                <h1 onClick={() => navigate('/detail')} className='cursor-pointer text-xl sm:text-2xl font-bold'>{data.title}</h1>
                <p className='text-xs sm:text-sm font-medium text-gray-500 mt-2'>
                    {Ellipsis(data.description)}
                </p>
            </div>
            <div className='w-[20%] sm:w-[30%]'>
                <img
                    className='w-full aspect-video object-cover' 
                    src={data.image} 
                    alt='thumbnail' />
            </div>
        </div>
        <div className='w-full sm:w-[70%] mt-6 flex justify-between items-center'>
            <p className='text-sm'>{formatDate(data.date)}</p>
            <img className='w-[24px]' src={BookmarkIcon} alt='bookmark-icon'/>
        </div>
    </div>
  )
}

export default Card