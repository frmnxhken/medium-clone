import React, { useState } from 'react'
import HeaderPost from '@/components/post/HeaderPost'
import { content } from '@/utils/data/ContentDummy'
import CardPost from '@/components/post/CardPost'
import ChatResponse from '@/components/post/ChatResponse'
import CreateResponse from '@/components/post/CreateResponse'
import Button from '@/components/ui/Button'
import Responses from '@/components/post/Responses'

const DetailPost = () => {
  const [active, setActive] = useState(false)

  return (
    <div className='pt-8'>
        <HeaderPost/>
        <div className='py-8'>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
        <div className='py-12'>
          <h1 className='text-2xl font-semibold'>Responses (17)</h1>
          <CreateResponse/>
          <div className='grid gap-y-4 mt-8'>
            <ChatResponse/>
            <ChatResponse/>
            <ChatResponse/>
            <div>
              <Button onClick={() => setActive(!active)} variant='secondary'>See all response</Button>
            </div>
          </div>
        </div>
        <div className='py-12'>
          <h1 className='text-2xl font-semibold'>Recommended From Menengah</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-12 mt-8'>
            <CardPost/>
            <CardPost/>
          </div>
        </div>
        <Responses active={active} onClose={(val) => setActive(val)}/>
    </div>
  )
}

export default DetailPost