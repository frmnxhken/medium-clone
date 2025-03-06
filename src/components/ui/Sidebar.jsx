import { posts } from '@/utils/data/PostDummy'
import React from 'react'
import ListCard from '../home/ListCard'

const Sidebar = () => {
  return (
    <div className='sticky top-0 h-[120vh] w-[350px] px-8 pt-10 border-l border-gray-100'>
      <h2 className='text-md font-semibold'>Staff Picks</h2>
      <div className='mt-4'>
        { posts.slice(0, 3).map((post, index) => (
          <ListCard
            key={index}
            data={post}
          />
        ))}
      </div>
    </div>
  )
}

export default Sidebar