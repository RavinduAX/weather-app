import React from 'react'

const ForecastCard = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h4 className='text-white mt-5 mb-2'>04:00 PM</h4>
      <img className='w-10 mb-4' src="https://img.freepik.com/premium-vector/sun-illustration_498740-7877.jpg" alt="" />
        <h4 className='text-white'>20°</h4>
    </div>
  )
}

export default ForecastCard
