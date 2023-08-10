import React from 'react'
import ForecastCard from './ForecastCard'

const Forecast = ({title}) => {
  return (
    <div className='mt-5 mb-4'>
        <h4 className='text-white uppercase font-medium text-start border-b pb-1'>{title}</h4>

        <div className='flex flex-row justify-around'>
           <ForecastCard/>
           <ForecastCard/>
           <ForecastCard/>
           <ForecastCard/>
           <ForecastCard/>
        </div>
    </div>
  )
}

export default Forecast
