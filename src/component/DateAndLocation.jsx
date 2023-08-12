import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DateAndLocation = ({ location }) => {

  const city = location;
  const [data, setData] = useState({ name: '', country: '' })

  useEffect(() => {
     axios.get(`http://api.weatherapi.com/v1/forecast.json?key=a393728118084352b3571035231005&q=${location}`)
      .then(res => { setData({ name: res.data.location.name, country: res.data.location.country }); console.log('dd') })
      .catch(err => console.log(err))
  }, [city])

  return (
    <div className='mt-8 mb-7 text-center text-white'>
      <div className='flex flex-row justify-center items-center'>
        <h4 className='font-extralight text-xl'>{ }</h4>
      </div>

      <h4 className='mt-4 text-2xl font-semibold'>{data.name} | {data.country}</h4>
    </div>
  )
}

export default DateAndLocation
