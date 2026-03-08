import { Github } from 'lucide-react'
import React from 'react'

const EmptyState = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-20 text-gray gap-3'>
      <Github className='w-20 h-20 text-gray-300 font-normal mb-4'></Github>
      <h1 className='text-2xl font-semibold'>Search for a GitHub Profile</h1>
      <p className='text-gray-400 text-center'>Enter a username to view their profile and repositories</p>
      <p>Try: <span className='bg-gray-200 rounded-md p-1'>Muhammad-Raheel04</span></p>
    </div>
  )
}

export default EmptyState
