import React from 'react'

const Heading = ({title, subtitle}) => {
  return (
    <div className='py-3'>
      <h1 className='text-2xl text-warm-white'>{title}</h1>
    </div>
  )
}

export default Heading