import React  from 'react'

const Dropdown = ({ options, onSelect, isOpen }) => {
  return (
    <>
      {isOpen && (
        <div className='absolute mt-12 min-w-[200px] right-0 z-50 bg-white shadow-md overflow-hidden border border-gray-200 px-6 py-4'>
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => {
                onSelect(option)
              }}
              className='cursor-pointer block w-full py-4 text-left text-sm'
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </>
  )
}

export default Dropdown