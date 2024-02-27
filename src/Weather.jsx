import React, { useState } from "react";
import axios from "axios";
import "./weather.css";

export default function Weather(props) {
  const [showData, setShowData] = useState({ dataState: false });

  function handleSubmit(event) {
    event.preventDefault();
  }

  // function handleChange(event) {
  //   let city = event.target.value;
  // }

  function showWeather(response) {
    console.log(response.data);
    setShowData({
      dataState: true,
      city: response.data.name,
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
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
        </div>
        <main>
          <div className="row current-weather">
            <div className="col-4">
              <h1 className="current-city" id="current-city">
                {showData.city}
              </h1>
            </div>
            <div className="col-4">
              <p className="current-details">
                <span id="current-date"></span>
                {showData.description} <br />
                Humidity: <strong>{showData.humidity}%</strong> <br />
                Wind: <strong>{showData.wind}km/h</strong>
              </p>
            </div>
            <div className="col-4 current-temperature">
              <span className="current-temperature-icon">☀️</span>
              <span
                className="current-temperature-value"
                id="current-temperature"
              >
                {Math.round(showData.temp)}
              </span>
              <span className="current-temperature-unit">°C</span>
            </div>
          </div>
        </main>
      </div>
    );
  } else {
    const key = "6d44bd5412a31a5753bfb26cca847f85";
    const units = "metric";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${key}&units=${units}`;
    axios.get(apiUrl).then(showWeather);

    return (
      <div>
        <h1>Loading..!</h1>
      </div>
    );
  }
}
