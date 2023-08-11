import React, {useState } from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import axios from 'axios';

const Navbar = ({getData}) => {

  const [city, setCity] = useState('');

  const getWeatherData = () => {
    axios.get(`http://api.weatherapi.com/v1/forecast.json?key=a393728118084352b3571035231005&q=${city}`)
      .then(res => getData(res.data))
      .catch(err => console.log(err))
  }

  const handleClick = () => {
    getWeatherData();
  }


  return (
    <div className='text-white mt-1'>
      <h3 className='text-3xl font-semibold text-center'>Weather Mate</h3>
      <div className='mt-6 flex flex-row justify-around'>
        <input value={city} onChange={(e) => { setCity(e.target.value) }} placeholder='search for city...' type="text" className='w-3/4 p-2 text-xl font-normal capitalize placeholder:lowercase focus:outline-none text-black' />
        <button onClick={handleClick} className='hover:transition ease-out delay-100 hover:scale-125' ><AiOutlineSearch className='text-2xl' /></button>
      </div>
    </div>
  )
}

export default Navbar
