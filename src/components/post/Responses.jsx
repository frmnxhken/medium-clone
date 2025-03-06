import React, { useState } from 'react'
import CreateResponse from './CreateResponse'
import ChatResponse from './ChatResponse'
import Overlay from '../ui/Overlay'

const Responses = (props) => {
  return (
    <>
      <Overlay status={props?.active}/>
      <div className={`${props?.active ? 'scrollbar-hide' : 'bottom-[-100%] sm:right-[-100%]'} 
        fixed transition-all bottom-0 right-0 z-50 bg-white rounded-t-3xl sm:rounded-t-none w-full sm:w-[25%] h-[90%] sm:h-full overflow-y-auto`}>
        <div className='py-12 px-6'>
            <div className='flex items-center justify-between mb-6'>
              <h1 className='text-2xl font-semibold'>Responses (17)</h1>
              <span 
                onClick={() => props.onClose(false)}
                className='text-3xl font-normal cursor-pointer'>&times;</span>
            </div>
            <CreateResponse/>
            <div className='grid gap-y-4 mt-8'>
              <ChatResponse/>
              <ChatResponse/>
              <ChatResponse/>
            </div>
          </div>
      </div>
    </>
  )
}

export default Responses