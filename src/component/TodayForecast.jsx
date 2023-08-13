import React from 'react'

const TodayForecast = ({ data }) => {
   
   //data.current
   let fData = '' 
   if (data !== 'undefined') {
      fData = data.current;
   }

   return (
      <div className='text-center'>
         <h4 className='text-cyan-300 text-xl mb-4'>{fData && fData.condition.text}</h4>

         <div className='flex flex-row justify-between items-center'>
            <img src={fData && fData.condition.icon} alt="" className='w-20' />
            <h4 className='text-6xl text-white font-normal'>20°</h4>
            <div className='flex flex-col items-start'>
               <p className='text-white mb-1'>Real Feel: <span className='font-semibold ms-2' >19°</span></p>
               <p className='text-white mb-1'>Humidity: <span className='font-semibold ms-2'>42%</span></p>
               <p className='text-white mb-1'>Wind: <span className='font-semibold ms-2'>2km/h</span></p>
            </div>
         </div>

         <div className='flex flex-row justify-center mt-6'>
            <p className='text-white mb-1'>Rise: <span className='font-medium ms-2'>04:50 AM</span></p>
            <p className='mx-3 text-white'>|</p>
            <p className='text-white mb-1'>Set: <span className='font-medium ms-2'>06:17 PM</span></p>
            <p className='mx-3 text-white'>|</p>
            <p className='text-white mb-1'>High: <span className='font-medium ms-2'>22°</span></p>
            <p className='mx-3 text-white'>|</p>
            <p className='text-white mb-1'>Low: <span className='font-medium ms-2'>18°</span></p>
         </div>
      </div>
   )
}

export default TodayForecast
