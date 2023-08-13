import React from 'react'

const DateAndLocation = ({ data }) => {

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }  

  return (
    <div className='mt-8 mb-7 text-center text-white'>
      <div className='flex flex-row justify-center items-center'>
        <h4 className='font-extralight text-xl'>{dateBuilder(new Date())}</h4>
      </div>

      <h4 className='mt-4 text-2xl font-semibold'>{data.location && data.location.name} | {data.location && data.location.country }</h4>
    </div>
  )
}

export default DateAndLocation
