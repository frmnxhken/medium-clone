import React from 'react'
import SearchInput from '@/components/ui/SearchInput'

const Search = () => {
  return (
    <div className='w-full py-6 sm:py-12 space-y-8'>
      <SearchInput variant='mobile'/>
      <h1 className='text-3xl sm:text-5xl font-semibold'>Recent searches</h1>
      <p className='text-md font-normal mt-12'>You have no recent searches</p>
    </div>
  )
}

export default Search