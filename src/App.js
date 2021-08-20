import './App.css';
import React, { useEffect, useState } from "react";
import Weather from './components/weather';
import WeatherCard from './components/WeatherCard';
import CitySelector from './components/CitySelector';
import WeatherList from './components/WeatherList';
import UseFetch from './hooks/UseFetch'

import 'bootstrap/dist/css/bootstrap.min.css';
import Forecast from './components/forecast';

export default function App() {
  
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]); 
  const {dataF, error, isLoading, setUrl} = UseFetch();

  // error handling and loading
  const getContent = () => {
    if(error) return <h2>Error when fetching: {error}</h2>
    if(!dataF && isLoading) return <h2>LOADING...</h2>
    if(!dataF) return null;
    return <WeatherList weathers={dataF} />
  };

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
      });
    }
    fetchData();
  },[lat,long])
  
  return (
    <div className="App">
      <div className="container">
        {(typeof data.main != 'undefined') ? (
          <Weather weatherData={data}/>
        ): (
          <div></div>
        )}
      </div>

      <div className="container">
        <CitySelector onSearch={(city) => setUrl(`${process.env.REACT_APP_API_URL}/forecast?q=${city}&APPID=${process.env.REACT_APP_API_KEY}&units=metric`)} />
        {}
        {getContent()}
      </div>
          
      
    </div>
  );
}