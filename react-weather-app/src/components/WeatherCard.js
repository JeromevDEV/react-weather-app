// components/WeatherCard.js

import React from 'react';
import {Card} from 'react-bootstrap';
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

const WeatherCard = ({dt, temp_min, temp_max, humidity, temp, main, city, country  }) => {
  const WeatherIcon = styled.div`color: whitesmoke;`;

  let weatherIcon = null;
  
  if (main === 'Thunderstorm') {
    weatherIcon = <FontAwesomeIcon icon={faBolt} />;
  } else if (main === 'Drizzle') {
    weatherIcon = <FontAwesomeIcon icon={faCloudRain} />;
  } else if (main === 'Rain') {
    weatherIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} />;
  } else if (main === 'Snow') {
    weatherIcon = <FontAwesomeIcon icon={faSnowflake} />;
  } else if (main === 'Clear') {
    weatherIcon = <FontAwesomeIcon icon={faSun} />;
  } else if (main === 'Clouds') {
    weatherIcon = <FontAwesomeIcon icon={faCloud} />;
  } else {
    weatherIcon = <FontAwesomeIcon icon={faSmog} />;
  }  


  // create a date object with Date class constructor
  const date = new Date(dt);
  return (
    <div className="main">
        <Card style={{width: '18rem'}}>
        <Card.Header>
            <WeatherIcon style={{fontSize:30,marginTop:15, color:'black'}}>{weatherIcon}</WeatherIcon>
        </Card.Header>
        <Card.Body>
            <Card.Title>{city} - {country}</Card.Title>
            {/*  datetime is received in milliseconds, let's turn into local date time */}
            <p>
            {date.toLocaleDateString()} - {date.toLocaleTimeString()}
            </p>
            {/* minimum temperature */}
            <p>Min: {temp_min}</p>
            {/* maximum temperature */}
            <p>Max: {temp_max}</p>
            {/* humidity */}
            <p>Humidity: {humidity} %</p> 
            {/* temperature */}
            <p>Temperature: {temp} &deg;C</p>
        </Card.Body>
        </Card>        
    </div>  
  );
};

export default WeatherCard;