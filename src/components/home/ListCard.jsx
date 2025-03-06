import React from 'react'
import { formatDate } from '@/utils/Date'

const ListCard = (props) => {
  const { data } = props
  return (
    <div className='py-4'>
        <div className='flex items-center gap-x-2'>
            <img
                className='w-[24px] h-[24px] rounded-md object-cover' 
                src={data.profile} 
                alt='photo-profile' />
            <p className='text-sm'>{data.author}</p>
        </div>
        <h1 className='text-lg font-bold mt-2'>{data.title}</h1>
        <p className='text-xs mt-2'>{formatDate(data.date)}</p>
    </div>
  )
}

export default ListCard