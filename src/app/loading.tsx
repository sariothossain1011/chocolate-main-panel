import React from 'react'

const loading = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="rounded-full h-20 w-20 bg-gray-400 animate-ping"></div>
    </div>
  )
}

export default loading