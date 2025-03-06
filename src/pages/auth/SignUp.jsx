import React from 'react'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen max-w-[480px] w-full mx-auto'>
        <form action="" method="post" className='w-full space-y-4'>
            <h1 className='text-3xl font-semibold text-center mb-6'>Join With Us</h1>
            <Input placeholder='fullname'/>
            <Input placeholder='email'/>
            <Input placeholder='Password' type='password'/>
            <Input placeholder='Confirm Password' type='password'/>
            <Button styles='w-full' variant='primary'>Sign In</Button>
        </form>
        <p className='text-sm mt-4'>Do you have an account ? <Link to='/signin'>Sign In</Link></p>
        <p className='text-md font-semibold py-4'>Or</p>
        <Button styles='w-full' variant='dark'>Sign In with Google</Button>
    </div>
  )
}

export default SignUp