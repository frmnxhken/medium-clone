import React from 'react'

const ChatResponse = () => {
  return (
    <div className='py-6 border-b border-gray-100'>
        <div className='flex items-center gap-x-2'>
            <img className='w-[44px] h-[44px] rounded-full object-cover' src='https://i.pinimg.com/736x/17/13/77/17137776931c3f3a800835016c4f98f8.jpg' alt='photo-profile' />
            <div>
                <h2 className='text-sm font-medium'>Alicia Chandra</h2>
                <p className='text-sm'>Mar 06, 2025</p>
            </div>
        </div>
        <p className='text-sm mt-6 w-[90%] font-medium'>Your article is very good, the explained so easy listening, i hope you can make it again with other topic. Thankyou</p>
    </div>
  )
}

export default ChatResponse