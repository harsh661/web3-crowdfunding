import React from "react"

const Skeleton = () => {
  return (
    <div className="py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div className="bg-dark-alt/70 rounded-md p-5 aspect-square animate-pulse"></div>
      <div className="bg-dark-alt/70 rounded-md p-5 aspect-square animate-pulse"></div>
      <div className="bg-dark-alt/70 rounded-md p-5 aspect-square animate-pulse"></div>
      <div className="bg-dark-alt/70 rounded-md p-5 aspect-square animate-pulse"></div>
      <div className="bg-dark-alt/70 rounded-md p-5 aspect-square animate-pulse"></div>
      <div className="bg-dark-alt/70 rounded-md p-5 aspect-square animate-pulse"></div>
    </div>
  )
}

export default Skeleton
