import './App.css';
import DateAndLocation from './component/DateAndLocation';
import Forecast from './component/Forecast';
import Navbar from './component/Navbar';
import TodayForecast from './component/TodayForecast';


function App() {
  return (
    <div className='mx-auto max-w-screen-md mt-6 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 shadow-xl h-fit shadow-gray-400'>
      <Navbar />
      <DateAndLocation />
      <TodayForecast />
      <Forecast title={'hourly forecast'} />
    </div>
  );
}

export default App;
