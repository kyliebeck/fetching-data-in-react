import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as weatherService from './services/weatherService';
import WeatherSearch from './components/WeatherSearch/WeatherSearch';

import WeatherDetails from './components/WeatherDetails/WeatherDetails';





const App = () => {
  const [weather, setWeather] = useState({});


  useEffect(() => {

    // Define a fetch function:
    const fetchDefaultData = async () => {
      const data = await weatherService.show('New York');
      const newWeatherState = {
        location: data.location.name,
        temperature: data.current.temp_f,
        condition: data.current.condition.text,
      };
      setWeather(newWeatherState);
    };
    fetchDefaultData();
  }, []);


  return (
    <main>
      <h1>Weather API</h1>
      <WeatherSearch />
      <WeatherDetails weather={weather} />
    </main>
  );
};


export default App

