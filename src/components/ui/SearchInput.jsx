import React from 'react'
import SearchIcon from '@/assets/icons/search.svg'

const SearchInput = (props) => {
  const variants = {
    desktop: 'hidden sm:flex bg-stone-100',
    mobile: 'flex sm:hidden border border-gray-100'
  }
  return (
    <div className={`${variants[props.variant]} items-center justify-between px-4 py-2 gap-x-2 rounded-full`}>
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

export default SearchInput