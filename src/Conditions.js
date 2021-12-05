import React from "react";
import "weather-icons/css/weather-icons.css"

export default function WeatherCondition(props){
    return(
        <i className={`weather_icon wi ${props.weatherIcon}`}/>
    )
}