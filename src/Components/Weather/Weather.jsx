import React from 'react';
import { useState } from "react";
import './Weather.css'

import search_icon from '../Assets/search.png'
import clear_icon from '../Assets/clear.png'
import cloud_icon from '../Assets/cloud.png'
import drizzle_icon from '../Assets/drizzle.png'
import rain_icon from '../Assets/snow.png'
import wind_icon from '../Assets/wind.png'
import humidity_icon from '../Assets/humidity.png'
import snow_icon from '../Assets/snow.png'

const Weather = () => {
 
 let api_key ="3b3ced14e0902e6855ae9ad09bcd2eb8";
 const [wicon, setWicon] = useState(cloud_icon);

 const search= async()=>{
    const element = document.getElementsByClassName("cityInput");
    if(element[0].value===''){
        return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();
    
    const temperature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");
    const humditiy = document.getElementsByClassName("humditiy-percentage");
    const wind = document.getElementsByClassName("wind-rate");

    temperature[0].innerHTML = data.main.temp + "°C";
    humditiy[0].innerHTML = data.main.humidity + " %";
    wind[0].innerHTML = data.wind.speed + " km/h";
    location[0].innerHTML = data.name;

    if(data.weather[0].icon==="01d" || data.weather.icon==="01n"){
        setWicon(clear_icon)
    }
    else if(data.weather[0].icon==="02d" || data.weather.icon==="02n"){
        setWicon(cloud_icon)
    }
    else if(data.weather[0].icon==="03d" || data.weather.icon==="03n"){
        setWicon(drizzle_icon)
    }
    else if(data.weather[0].icon==="04d" || data.weather.icon==="04n"){
        setWicon(drizzle_icon)
    }
    else if(data.weather[0].icon==="010" || data.weather.icon==="09n"){
        setWicon(rain_icon)
    }
    else if(data.weather[0].icon==="10d" || data.weather.icon==="10n"){
        setWicon(rain_icon)
    }
    else if(data.weather[0].icon==="13d" || data.weather.icon==="13n"){
        setWicon(snow_icon)
    }
    else{
        setWicon(clear_icon)
    }
 }

  return (
    <div>
      <div className="container">
        <div className="top-menu">
            <input type="text" className="cityInput" placeholder='Search'/>
            <div className="search_icon" onClick={search}>
              <img src={search_icon} alt=''/>
            </div>
        </div>
        <div className="weather-image">
             <img src={wicon} alt="" />
        </div>
        <div className="weather-temp">24°c</div>
        <div className="weather-location">London</div>
        <div className="data-container">
            <div className="element">
                <img src={humidity_icon} alt="" className="icon" />
                <div className="data">
                    <div className="humditiy-percentage">64%</div>
                    <div className="text">Humditiy</div>
                </div>
            </div>
            <div className="element">
                <img src={wind_icon} alt="" className="icon" />
                <div className="data">
                    <div className="wind-rate">18 km/h</div>
                    <div className="text">wind speed</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Weather
