import React from 'react'
import TextArea from '../ui/TextArea'
import Button from '../ui/Button'

const CreateResponse = () => {
  return (
    <div className='space-y-4 py-6'>
        <div className='flex items-center gap-x-2'>
            <img className='w-[44px] h-[44px] rounded-full object-cover' src='https://i.pinimg.com/736x/17/13/77/17137776931c3f3a800835016c4f98f8.jpg' alt='photo-profile' />
            <h2 className='text-sm font-medium'>Alicia Chandra</h2>
        </div>
        <div className='bg-stone-100'>
            <TextArea placeholder='What are you thoughts'/>
            <div className='p-4 flex justify-end gap-x-2'>
                <Button variant='light'>Cancel</Button>
                <Button variant='dark'>Respond</Button>
            </div>
        </div>
    </div>
  )
}

export default CreateResponse