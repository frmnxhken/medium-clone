import React from 'react'
import Card from '@/components/ui/Card'
import { posts } from '@/utils/data/PostDummy'
import Sidebar from '@/components/ui/Sidebar'
import Tab from '@/components/ui/Tab'
import ProfileCard from '@/components/profile/ProfileCard'

const Profile = () => {
  return (
    <>
      <div className='py-0 sm:py-6 w-full sm:w-[60%]'>
        <h1 className='hidden sm:block text-3xl font-semibold py-6'>Michael Brown</h1>
        <Tab/>
        <div className='w-full py-6'>
          {posts.slice(-1).map((post, index) => (
            <Card
              key={index}
              data={post}
            />
          ))}
        </div>
      </div>
      <Sidebar>
        <ProfileCard/>
      </Sidebar>
    </>
  )
}

export default Profile