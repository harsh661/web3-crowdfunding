import React from 'react'
import {CgSearch} from 'react-icons/cg'

const Search = ({placeholder}) => {
  return (
    <div className='bg-dark-alt/70 border-gray-border rounded-md w-full text-gray-text flex items-center pl-2'>
        <CgSearch size={20}/>
        <input type='text' className='bg-transparent p-2 text-sm w-full outline-none' placeholder={placeholder}/>
    </div>
  )
}

export default Search