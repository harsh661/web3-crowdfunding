import React from 'react'

const Button = ({label, onClick}) => {
  return (
    <div onClick={onClick} className='bg-accent/90 hover:bg-accent py-2 px-3 text-sm rounded-md font-bold transition-all duration-200 text-center cursor-pointer'>
        {label}
    </div>
  )
}

export default Button