import Card from '@/components/home/Card'
import SlideCategory from '@/components/home/SlideCategory'
import { posts } from '@/utils/data/PostDummy'
import React from 'react'

const Home = () => {
  return (
    <div className='py-6'>
      <SlideCategory/>
      <div className='w-full mt-6'>
        { posts.map((post, index) => (
          <Card 
            key={index}
            data={post}  
          />
        )) }
      </div>
    </div>
  )
}

export default Home