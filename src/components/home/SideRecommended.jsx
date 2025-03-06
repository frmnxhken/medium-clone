import { posts } from '@/utils/data/PostDummy'
import React from 'react'
import ListCard from './ListCard'

const SideRecommended = () => {
  return (
    <div className='hidden sm:block px-8 pt-10 h-[100vh] sticky top-0'>
      <h2 className='text-md font-semibold'>Staff Picks</h2>
      <div className='mt-4'>
        {posts.slice(0, 3).map((post, index) => (
          <ListCard
            key={index}
            data={post}
          />
        ))}
      </div>
    </div>
  )
}

export default SideRecommended