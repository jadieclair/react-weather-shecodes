import React, { useState } from "react";
import axios from "axios";
import "./searchWeather.css";
import Weather from "./Weather";
import WeatherForecast from "./WeatherForecast";

export default function SearchWeather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [showData, setShowData] = useState({ dataState: false });

  function search() {
    // const key = "6d44bd5412a31a5753bfb26cca847f85";
    const key = "5f472b7acba333cd8a035ea85a0d4d4c";
    const units = "metric";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  function showWeather(response) {
    setShowData({
      dataState: true,
      coordinates: response.data.coord,
      city: response.data.name,
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }

  if (showData.dataState) {
    return (
      <div className="app">
        <div className="header-container">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a City..."
              className="search-input"
              onChange={handleChange}
              autoFocus="on"
            />
            <input type="submit" value="Search" className="search-button" />
          </form>
          <Weather seeData={showData} />
          <WeatherForecast coordinates={showData.coordinates} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
