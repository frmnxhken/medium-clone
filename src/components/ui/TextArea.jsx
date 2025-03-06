import React from 'react'

const TextArea = (props) => {
  return (
    <textarea 
        {...props} 
        placeholder={props.placeholder} 
        className='w-full bg-stone-100 rounded-lg min-h-[100px] outline-0 p-4'>
    </textarea>
  )
}

export default TextArea