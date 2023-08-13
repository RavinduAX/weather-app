import React from 'react'

const DateAndLocation = ({ data }) => {

  

  return (
    <div className='mt-8 mb-7 text-center text-white'>
      <div className='flex flex-row justify-center items-center'>
        <h4 className='font-extralight text-xl'>{}</h4>
      </div>

      <h4 className='mt-4 text-2xl font-semibold'>{data.location && data.location.name} | {data.location && data.location.country }</h4>
    </div>
  )
}

export default DateAndLocation
