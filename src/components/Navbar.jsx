import React from 'react'

const Navbar = () => {
  return (
    <div className="flex flex-row container py-5 px-5 justify-between">
      <p className="text-4xl font-medium tracking-wider">Wildan</p>

      <div className="flex items-center">
        <p className='text-lg font-normal tracking-wider px-5'>Home</p>
        <p className='text-lg font-normal tracking-wider px-5'>About Me</p>
        <p className='text-lg font-normal tracking-wider px-5'>Service</p>
        <p className='text-lg font-normal tracking-wider px-5'>Contacts</p>
      </div>
    </div>
  )
}

export default Navbar
