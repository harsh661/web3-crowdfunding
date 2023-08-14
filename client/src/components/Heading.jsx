import React from 'react'

const Heading = ({title, subtitle}) => {
  return (
    <div className='py-3 flex flex-col gap-2'>
      <h1 className='text-2xl text-warm-white'>{title}</h1>
      {subtitle && <p className='text-sm text-gray-text'>{subtitle}</p>}
    </div>
  )
}

export default Heading