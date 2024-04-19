import axios from 'axios'
import React, { useState } from 'react'

const AddTaskScreen = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  // Submit function
  const handleSubmit = () => {
    axios
      .post('http://localhost:9000/api/tasks', {
        title,
        description,
      })
      .then(() => {
        setMessage('Task added successfully')
        setTitle('')
        setDescription('')
      })
      .catch((error) => {
        setError('Unable to add task')
        console.log(error)
      })
  }

  return (
    <div className='font-poppins bg-gray-200'>
      <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-xl bg-white p-2 rounded-lg'>
          <form
            action='#'
            className='mb-0 mt-6 space-y-6 rounded-lg p-4 sm:p-6 lg:p-12'
          >
            <p className='text-center text-2xl font-medium text-cyan-600'>
              Add New Task
            </p>
            <div>
              {message && (
                <p className='text-green-600 text-lg text-center'>{message}</p>
              )}
              {error && (
                <p className='text-red-600 text-lg text-center'>{error}</p>
              )}
            </div>
            <div>
              <label htmlFor='title' className='sr-only'>
                Email
              </label>
              <div className='relative'>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type='text'
                  className='w-full border border-neutral-200 focus:outline-indigo-500 rounded-lg p-3 pe-12 text-base'
                  placeholder='Enter the title'
                />
              </div>
            </div>
            <div>
              <label htmlFor='description' className='sr-only'>
                Password
              </label>

              <div className='relative'>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  type='text'
                  className='w-full rounded-lg  border border-neutral-200 focus:outline-indigo-500 p-4 pe-12 text-base shadow-sm'
                  placeholder='Enter description'
                  cols={5}
                ></textarea>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              type='submit'
              className='block w-full rounded-lg bg-indigo-500 hover:bg-indigo-700 duration-200 ease-in px-5 py-3 text-base font-medium text-white'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddTaskScreen
