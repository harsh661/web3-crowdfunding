import React from 'react'

const Button = ({label}) => {
  return (
    <div className='bg-accent py-2 px-3 text-sm rounded-md'>
        {label}
    </div>
  )
}

export default Button