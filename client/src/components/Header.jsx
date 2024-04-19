import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex flex-row lg:px-12 font-poppins justify-between items-center p-5 bg-gray-100 '>
      <div className='text-3xl font-semibold text-teal-500'>
        <Link to='/'>
          Dev<span className='text-indigo-500'>Code</span>
        </Link>
      </div>
      <div className='text-xl font-medium text-indigo-500'>
        <Link to='/addtask'>Add Task</Link>
      </div>
    </div>
  )
}

export default Header
