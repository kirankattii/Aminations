import React from 'react'

export const UseAnimate = () => {
  return (
    <div className='grid h-screen place-content-center'>
      <Basic />
    </div>
  )
}

const Basic = () => {
  return (
    <div className='w-24 h-24 bg-indigo-500'>
      <button className='mt-4 rounded-md bg-white text-gray-900'>Trigger animation</button>
    </div>
  )
}