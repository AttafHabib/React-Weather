import React, {useState} from "react"
import Date from "./Date"
import Temprature from "./Temprature"
import Header from "./Header/Header.js"
import WeatherApi from "./services/WeatherApi"
import ButtonChange from "./ButtonChange"
import WeatherCondition from "./Conditions"
import './App.css';

const icon = {
  Thunderstorm: "wi-thunderstorm",
  Drizzle: "wi-sleet",
  Snow: "wi-snow",
  Rain: "wi-storm-showers",
  Fog: "wi-fog",
  Smoke: "wi-smoke",
  Dust: "wi-dust",
  Clouds: "wi-cloudy",
  Mist: "wi-smoke",
  "01n": "wi-night-clear",
  "01d": "wi-day-sunny"
};

export default function My_page(){

  const [temp, setTemp] = useState(() => 30)
  const[city, setCity] = useState({cityName: "", currentCity: ""})
  const [weatherIcon, setIcon] = useState(() => icon.Thunderstorm)

  const onIncClick = () => {
    setTemp(prevTemp => prevTemp+1)
  }
  function onDecClick(){
    setTemp(prevTemp => prevTemp-1)
  }
  const handleSearched = (event) => {
    setCity((prevCity) => {
    return {...prevCity, cityName: event.target.value}
  })
  }

  const callWeather = (city) =>{
    WeatherApi(city)
    .then(result=> setWeater(result))
    .catch(reject=>console.log("Failed"))
  }

  function getIcon(condition){
    return icon[`${condition.main}`] || icon[`${condition.icon}`]
  }
  const setWeater = (result) => {
    setTemp(() => Math.floor(result.main.temp))
    setIcon(() => getIcon(result.weather[0]))
  }

  const handleSubmit = (event) => {
    setCity((prevCity) => {
      return {...prevCity, currentCity: prevCity.cityName}
    })
    callWeather(city.cityName);

    event.preventDefault();
  }

  return (
    <div className="app cold">
      <main>
        <Header city={city.currentCity} temprature = {temp} inputCity={city.cityName} searchTemp = {handleSubmit} citySearched = {handleSearched}/>
        <div className="card center_text">
          <WeatherCondition weatherIcon={weatherIcon}/>
          <Date/>
          <Temprature temp={temp}/>
          <ButtonChange inc_color='green' dec_color='yellow' onIncClick={onIncClick} onDecClick={onDecClick}/>
      </div>
      </main>
    </div>
  )
}