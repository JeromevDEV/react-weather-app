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


export default function weather({weatherData}) {
    const WeatherIcon = styled.div`color: whitesmoke;`;
    console.log(weatherData)
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
            <Card.Title>{weatherData.name} - {weatherData.sys.country}</Card.Title>
            <Card.Text>
            {/* actual temperature */}
            <p className="temp">Temperature: {weatherData.main.temp} &deg;C</p>
            {/* minimum temperature */}
            <p>Min: {weatherData.main.temp_min}</p>
            {/* maximum temperature */}
            <p>Max: {weatherData.main.temp_max}</p>
            {/* humidity */}
            <p className="temp">Humidity: {weatherData.main.humidity} %</p> 
            {/* lat & lon */}
            <p className="temp">Lat: {weatherData.coord.lat} - Lon: {weatherData.coord.lon}</p>
            {/* sunrise */}        
            <p className="sunrise-sunset">Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-US')}</p>
            {/* sunset */}        
            <p className="sunrise-sunset">Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-US')}</p>      
            <WeatherIcon style={{fontSize:30,marginTop:15, color:'black'}}>{weatherIcon}</WeatherIcon>
            </Card.Text>
            <Button variant="primary" onClick={refresh}><FontAwesomeIcon icon={faSync}/></Button>
        </Card.Body>
        </Card>
      
    </div>
    )
  }