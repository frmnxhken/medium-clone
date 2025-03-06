import React from 'react'
import BookmarkIcon from '@/assets/icons/bookmark.svg'
import { formatDate } from '@/utils/Date'

const Card = (props) => {
    const { data } = props
  return (
    <div className='border-b border-gray-100 py-6'>
        <div className='flex items-center gap-x-2'>
            <img
                className='w-[24px] h-[24px] rounded-md object-cover' 
                src={data.profile} 
                alt='photo-profile' />
            <p className='text-sm'>{data.author}</p>
        </div>
        <div className='flex gap-x-8 mt-4'>
            <div className='w-[70%]'>
                <h1 className='text-3xl font-bold'>{data.title}</h1>
                <p className='text-md text-gray-500 mt-2'>
                    {data.description.length > 120 ? 
                        data.description.slice(0, 120) + '..' : data.description}
                </p>
                <div className='mt-6 flex justify-between items-center'>
                    <p className='text-sm'>{formatDate(data.date)}</p>
                    <img className='w-[24px]' src={BookmarkIcon} alt='bookmark-icon'/>
                </div>
            </div>
            <div className='w-[30%]'>
                <img
                    className='w-full aspect-video object-cover' 
                    src={data.image} 
                    alt='thumbnail' />
            </div>
        </div>
    </div>
  )
}

export default Card