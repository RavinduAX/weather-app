import './App.css';
import React, { useEffect, useState } from 'react';
import DateAndLocation from './component/DateAndLocation';
import Forecast from './component/Forecast';
import Navbar from './component/Navbar';
import TodayForecast from './component/TodayForecast';
import axios from 'axios';


function App() {

  const [location, setLocation] = useState('')
  const [data, setData] = useState({})

  const getData = (data) => {
    setLocation(data);
  }

  useEffect(() => {
    axios.get(`http://api.weatherapi.com/v1/forecast.json?key=a393728118084352b3571035231005&q=${location}&days=5`)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [location])

  return (
    <div className='mx-auto max-w-screen-md mt-6 py-5 px-12 bg-gradient-to-br from-cyan-700 to-blue-700 shadow-xl h-fit shadow-gray-400'>
      <Navbar getData={getData} />
      <DateAndLocation data={data} />
      <TodayForecast data={data} />
      <Forecast title={'daily forecast'} data={data} />
    </div>
  );
}

export default App;
