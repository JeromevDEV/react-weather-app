// components/WeatherList.js

import React from 'react'
import { Col, Row } from 'react-bootstrap'
import WeatherCard from './WeatherCard'

const WeatherList = ({weathers}) => {
    console.log("e")
    console.log(weathers)

    return (
        <Row>
           {weathers.list.map(({dt, main, weather}) => (
                <Col col-sm key={dt}>
                    <WeatherCard
                    dt={dt * 1000} 
                    temp_min={main.temp_min} 
                    temp_max={main.temp_max} 
                    humidity={main.humidity}
                    temp={main.temp}
                    main={weather[0].main} 
                    city={weathers.city.name}
                    country={weathers.city.country}
                  />
                </Col>
            ))} 
        </Row>
    )
}

export default WeatherList;