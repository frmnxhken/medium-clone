import React from 'react'
import SearchIcon from '@/assets/icons/search.svg'

const Search = () => {
  return (
    <div className='flex items-center justify-between bg-stone-100 px-4 py-2 gap-x-2 rounded-full'>
        <img 
            className='w-[24px]' 
            src={SearchIcon} 
            alt='search-icon'/>
        <input 
            className='w-full outline-0 text-sm'
            type='text' 
            placeholder='Search'/>
    </div>
  )
}

export default Search