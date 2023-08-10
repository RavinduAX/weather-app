import React from 'react'

const ForecastCard = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h4 className='text-white mt-5 mb-2'>04:00 PM</h4>
        <img className='w-10 mb-4' src="https://o.remove.bg/downloads/39ae67c4-b42f-4bab-9e40-b4b63153e1df/sun-removebg-preview.png" alt="" />
        <h4 className='text-white'>20°</h4>
    </div>
  )
}

export default ForecastCard
