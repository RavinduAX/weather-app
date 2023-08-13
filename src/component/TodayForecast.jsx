import React from 'react'

const TodayForecast = ({ data }) => {

   //data.current
   let cData = '' 
   let fData = ''
   if (data !== 'undefined') {
      cData = data.current;
      fData = data.forecast;
   }

   return (
      <div className='text-center'>
         <h4 className='text-cyan-300 text-xl mb-4'>{cData && cData.condition.text}</h4>

         <div className='flex flex-row justify-between items-center'>
            <img src={cData && cData.condition.icon} alt="" className='w-20' />
            <h4 className='text-6xl text-white font-normal'>{cData && cData.temp_c}°C</h4>
            <div className='flex flex-col items-start'>
               <p className='text-white mb-1'>Real Feel: <span className='font-semibold ms-2' >{cData && cData.feelslike_c}°C</span></p>
               <p className='text-white mb-1'>Humidity: <span className='font-semibold ms-2'>{cData && cData.humidity}%</span></p>
               <p className='text-white mb-1'>Wind: <span className='font-semibold ms-2'>{cData && cData.wind_kph}km/h</span></p>
            </div>
         </div>

         <div className='flex flex-row justify-center mt-6'>
            <p className='text-white mb-1'>Rise: <span className='font-medium ms-2'>{fData && fData.forecastday[0].astro.sunrise}</span></p>
            <p className='mx-3 text-white'>|</p>
            <p className='text-white mb-1'>Set: <span className='font-medium ms-2'>{fData && fData.forecastday[0].astro.sunset}</span></p>
            <p className='mx-3 text-white'>|</p>
            <p className='text-white mb-1'>Rain: <span className='font-medium ms-2'>{fData && fData.forecastday[0].day.daily_chance_of_rain}%</span></p>
            <p className='mx-3 text-white'>|</p>
            <p className='text-white mb-1'>Max: <span className='font-medium ms-2'>{fData && fData.forecastday[0].day.maxtemp_c}°C</span></p>
            <p className='mx-3 text-white'>|</p>
            <p className='text-white mb-1'>Min: <span className='font-medium ms-2'>{fData && fData.forecastday[0].day.mintemp_c}°C</span></p>
         </div>
      </div>
   )
}

export default TodayForecast
