import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className='text-white mt-1'>
        <h3 className='text-3xl font-semibold text-center'>Weather Mate</h3>
        <div className='mt-6 flex flex-row justify-around'>
           <input placeholder='search for city...' type="text" className='w-3/4 p-2 text-xl font-normal capitalize placeholder:lowercase focus:outline-none text-black' />
           <button className='hover:transition ease-out delay-100 hover:scale-125' ><AiOutlineSearch className='text-2xl'/></button>
        </div>
    </div>
  )
}

export default Navbar
