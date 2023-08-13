import React, {useEffect, useState } from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import axios from 'axios';

const Navbar = ({getData}) => {

  const [city, setCity] = useState('Colombo');

  const handleClick = () => {
    getData(city);
    setCity('')
  }

  useEffect(() => {
    getData(city)
  },[])

  return (
    <div className='text-white mt-1'>
      <h3 className='text-3xl font-semibold text-center'>Weather Mate</h3>
      <div className='mt-8 flex flex-row justify-center'>
        <input value={city} onChange={(e) => { setCity(e.target.value) }} placeholder='search for city...' type="text" className='w-2/4 p-2 text-xl font-normal capitalize placeholder:lowercase focus:outline-none text-black' />
        <button onClick={handleClick} className='hover:transition ease-out delay-100 hover:scale-125 ms-6' ><AiOutlineSearch className='text-2xl' /></button>
      </div>
    </div>
  )
}

export default Navbar
