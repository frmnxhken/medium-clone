import React from 'react'

const Sidebar = ({children}) => {
  return (
    <div className='block w-full sm:w-[350px] bg-white boder-0 sm:border-l border-gray-100'>
        {children}
    </div>
  )
}

export default Sidebar