import React from 'react'
import ForecastCard from './ForecastCard'

const Forecast = ({ title, data }) => {

  let fData = data.forecast

  return (
    <div className='mt-8 mb-4'>
      <h4 className='text-white uppercase font-medium text-start border-b pb-1'>{title}</h4>

      <div className='flex flex-row justify-around'>
        <ForecastCard forecast={fData && fData.forecastday[1]} />
        <ForecastCard forecast={fData && fData.forecastday[2]} />
      </div>
    </div>
  )
}

export default Forecast
