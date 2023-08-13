import React from 'react'

const Avatar = ({url}) => {
  return (
    <div className='h-8 w-8 overflow-hidden rounded-full'>
        <img src={url} alt="profile" className="h-full w-full object-cover"/>
    </div>
  )
}

export default Avatar