import HeaderPost from '@/components/post/HeaderPost'
import { content } from '@/utils/data/ContentDummy'
import React from 'react'

const DetailPost = () => {
  return (
    <div className='pt-8'>
        <HeaderPost/>
        <div className='py-8'>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    </div>
  )
}

export default DetailPost