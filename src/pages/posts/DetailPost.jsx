import React from 'react'
import HeaderPost from '@/components/post/HeaderPost'
import { content } from '@/utils/data/ContentDummy'
import CardPost from '@/components/post/CardPost'

const DetailPost = () => {
  return (
    <div className='pt-8'>
        <HeaderPost/>
        <div className='py-8'>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
        <div className='py-24'>
          <h1 className='text-2xl font-semibold'>Recommended From Menengah</h1>
          <div className='grid grid-cols-2 gap-x-6 mt-8'>
            <CardPost/>
            <CardPost/>
          </div>
        </div>
    </div>
  )
}

export default DetailPost