import React from 'react'

const Button = (props) => {
  const variants = {
    primary: 'bg-green-700 text-white',
    secondary: 'bg-transparent border border-black text-black'
  }
  return (
    <button {...props} className={`px-4 py-2 text-sm font-medium rounded-full ${variants[props.variant]}`}>
      {props.children}
    </button>
  )
}

export default Button