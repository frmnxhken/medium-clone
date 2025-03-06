import React from 'react'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen max-w-[480px] w-full mx-auto'>
        <form action="" method="post" className='w-full space-y-4'>
            <h1 className='text-3xl font-semibold text-center mb-6'>Menengah</h1>
            <Input placeholder='Enter your email'/>
            <Input placeholder='Password' type='password'/>
            <Button styles='w-full' variant='primary'>Sign In</Button>
        </form>
        <p className='text-sm mt-4'>Dont have an account ? <Link to='/signup'>Sign Up</Link></p>
        <p className='text-md font-semibold py-4'>Or</p>
        <Button styles='w-full' variant='dark'>Sign In with Google</Button>
    </div>
  )
}

export default SignIn