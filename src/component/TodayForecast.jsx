import React from 'react'

const TodayForecast = () => {
   return (
      <div className='text-center'>
         <h4 className='text-cyan-300 text-xl mb-5'>Cloudy</h4>

         <div className='flex flex-row justify-between items-center'>
            <img src="https://o.remove.bg/downloads/39ae67c4-b42f-4bab-9e40-b4b63153e1df/sun-removebg-preview.png" alt="" className='w-20' />
            <h4 className='text-6xl text-white font-normal'>20°</h4>
            <div className='flex flex-col items-start'>
               <p className='text-white mb-1'>Real Feel: <span className='font-semibold'>19°</span></p>
               <p className='text-white mb-1'>Humidity: <span className='font-semibold'>42%</span></p>
               <p className='text-white mb-1'>Wind: <span className='font-semibold'>2km/h</span></p>
            </div>
         </div>

         <div>

         </div>
      </div>
   )
}

export default TodayForecast
