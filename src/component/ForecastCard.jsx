import React from 'react'

const ForecastCard = ({ forecast }) => {

  let data = forecast

  return (
    <div className='flex flex-row justify-center items-center mt-4'>
      <div className='flex flex-col justify-between items-center mr-4 self-start space-y-1'>
        <h4 className='text-white mb-2 underline '>{data && data.date}</h4>
        <img className='w-10' src={data && data.day.condition.icon} alt="" />
      </div>
      <div className='flex flex-col justify-center items-start space-y-1'>
        <h4 className='text-white font-light'>Temp: <span className='font-normal'>{data && data.day.avgtemp_c}°C</span></h4>
        <h4 className='text-white font-light'>Rain: <span className='font-normal'>{data && data.day.daily_chance_of_rain}%</span></h4>
        <h4 className='text-cyan-300 font-normal'>{data && data.day.condition.text}</h4>
      </div>
    </div>
  )
}

export default ForecastCard
