import React from 'react'
import Card from '@/components/home/Card'
import SlideCategory from '@/components/home/SlideCategory'
import { posts } from '@/utils/data/PostDummy'
import Sidebar from '@/components/ui/Sidebar'
import SideRecommended from '@/components/home/SideRecommended'

const Home = () => {
  return (
    <>
      <div className='py-0 sm:py-6 w-full sm:w-[60%]'>
        <SlideCategory/>
        <div className='w-full py-6'>
          { posts.map((post, index) => (
            <Card 
              key={index}
              data={post}  
            />
          )) }
        </div>
      </div>
      <Sidebar>
        <SideRecommended/>
      </Sidebar>
    </>
  )
}

export default Home