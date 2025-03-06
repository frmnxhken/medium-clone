import React from 'react'
import Button from '../ui/Button'
import MailIcon from '../../assets/icons/mail.svg'

const ProfileCard = () => {
  return (
    <div className='px-0 sm:px-6 py-6'>
      <div className='flex flex-row sm:flex-col items-center sm:items-start gap-x-4'>
        <img 
          src='https://i.pinimg.com/736x/4f/10/e6/4f10e65dc4fccc306cd2d3339a748026.jpg'
          alt='photo-profile'
          className='w-[50px] sm:w-[80px] h-[50px] sm:h-[80px] object-cover rounded-full'
        />
        <div>
          <h2 className='text-md font-semibold mt-2'>Michael Brown</h2>
          <p className='hidden sm:block text-sm font-medium text-gray-500 mt-2'>Software engineer passionate about tech, books, and mountains</p>
        </div>
      </div>
      <div className='flex items-center gap-x-2 mt-6'>
        <Button styles='w-full sm:w-auto' variant='primary'>Follow</Button>
        <Button variant='primary'>
          <img className='w-[18px]' src={MailIcon} alt='mail-icon'/>
        </Button>
      </div>
    </div>
  )
}

export default ProfileCard