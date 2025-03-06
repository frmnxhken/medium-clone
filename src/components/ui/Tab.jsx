import React from 'react'

const Tab = () => {
    const navs = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'About',
            path: '/about'
        },
    ]
  return (
    <div className='flex items-center gap-x-8 border-b border-gray-100 py-4'>
        { navs.map((nav, index) => (
            <button key={index} className='text-sm'>{nav.name}</button>
        ))}
    </div>
  )
}

export default Tab