import React from 'react'
import logo from '../../../public/logo.png'

const Navbar = () => {
  return (
    <>
      <div className='bg-black p-2 w-full'>
        <h3 className='text-white text-2xl font-bold tracking-normal leading-none text-center'>Welcome All</h3>
      </div>

      <div className='flex justify-around items-center'>
        <div>
            <img className='h-28 w-full' src={logo} alt="store" />
        </div>
        <div className='flex flex-row items-center '>
            <button className='mr-4 text-2xl font-bold tracking-normal leading-none text-center'>Logout</button>
        </div>
      </div>
    </>
  )
}

export default Navbar
