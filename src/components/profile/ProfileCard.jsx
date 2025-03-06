import React from 'react'
import Button from '../ui/Button'
import MailIcon from '../../assets/icons/mail.svg'

const ProfileCard = () => {
  return (
    <div className='p-6'>
      <img 
        src='https://i.pinimg.com/736x/4f/10/e6/4f10e65dc4fccc306cd2d3339a748026.jpg'
        alt='photo-profile'
        className='w-[80px] h-[80px] object-cover rounded-full'
      />
      <h2 className='text-md font-semibold mt-2'>Michael Brown</h2>
      <p className='text-sm font-medium text-gray-500 mt-2'>Software engineer passionate about tech, books, and mountains</p>
      <div className='flex items-center gap-x-2 mt-6'>
        <Button variant='primary'>Follow</Button>
        <Button variant='primary'>
          <img className='w-[18px]' src={MailIcon} alt='mail-icon'/>
        </Button>
      </div>
    </div>
  )
}

export default ProfileCard