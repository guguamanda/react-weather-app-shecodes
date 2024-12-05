import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
     const [weatherData, setWeatherData] = useState({ ready: false });
     function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "Wednesday 07:00",
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/rain_light.png",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) 
    return 
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>New York</h1>
        <ul>
          <li>Wednesday 07:00</li>
          <li>Mostly Cloudy</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
                alt="Mostly cloudy"
                className="float-left"
              />
              <div className="float-left">
              <span className="temperature">{Math.round(temperature)}</span>
              <span className="unit">ºC</span>
            </div>
            
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 100%</li>
              <li>Humidity: 75%</li>
              <li>Wind: 18 km/h</li>
            </ul>
          </div>
        </div>
      </div>

    ;
   else {
   const apiKey = "1e5495ae3fe80eb453c73of73afb2ect";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  } 



} 
 