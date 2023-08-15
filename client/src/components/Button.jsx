import React from 'react'

const Button = ({label, onClick, type='text', large}) => {
  return (
    <button type={type} onClick={onClick} className={`bg-accent/90 hover:bg-accent py-2 px-3 rounded-md font-bold transition-all duration-200 text-center cursor-pointer ${large ? 'text-lg': 'text-sm'}`}>
        {label}
    </button>
  )
}

export default Button