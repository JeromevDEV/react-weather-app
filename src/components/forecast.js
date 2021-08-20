import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components';

import {
    faCloud,
    faBolt,
    faCloudRain,
    faCloudShowersHeavy,
    faSnowflake,
    faSun,
    faSmog,
    faSync,
  } from '@fortawesome/free-solid-svg-icons';


export default function forecast({weatherData}) {
    const WeatherIcon = styled.div`color: whitesmoke;`;
  
    const refresh = () => {
      window.location.reload();
    }
  
    let weatherIcon = null;
  
    if (weatherData.weather[0].main === 'Thunderstorm') {
      weatherIcon = <FontAwesomeIcon icon={faBolt} />;
    } else if (weatherData.weather[0].main === 'Drizzle') {
      weatherIcon = <FontAwesomeIcon icon={faCloudRain} />;
    } else if (weatherData.weather[0].main === 'Rain') {
      weatherIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} />;
    } else if (weatherData.weather[0].main === 'Snow') {
      weatherIcon = <FontAwesomeIcon icon={faSnowflake} />;
    } else if (weatherData.weather[0].main === 'Clear') {
      weatherIcon = <FontAwesomeIcon icon={faSun} />;
    } else if (weatherData.weather[0].main === 'Clouds') {
      weatherIcon = <FontAwesomeIcon icon={faCloud} />;
    } else {
      weatherIcon = <FontAwesomeIcon icon={faSmog} />;
    }
  
    return (
      <div className="main">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
            <Card.Title>{weatherData.name}</Card.Title>
            <Card.Text>
            <p className="temp">Temprature: {weatherData.main.temp} &deg;C</p>
            <p className="temp">Humidity: {weatherData.main.humidity} %</p> 
            <p className="temp">Lat: {weatherData.coord.lat} - Lon: {weatherData.coord.lon}</p>          
            <p className="sunrise-sunset">Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-US')}</p>
            <p className="sunrise-sunset">Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-US')}</p>      
            <WeatherIcon style={{fontSize:30,marginTop:15, color:'black'}}>{weatherIcon}</WeatherIcon>
            </Card.Text>
            <Button variant="primary" onClick={refresh}><FontAwesomeIcon icon={faSync}/></Button>
        </Card.Body>
        </Card>
      
    </div>
    )
  }