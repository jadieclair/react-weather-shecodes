import React from "react";
import "./weather.css";
// import axios from "axios";

export default function Weather() {
  return (
    <main>
      <div className="current-weather">
        <div>
          <h1 className="current-city" id="current-city">
            Paris
          </h1>
          <p className="current-details">
            <span id="current-date"></span>, moderate rain <br />
            Humidity: <strong>87%</strong>, Wind: <strong>7.2km/h</strong>
          </p>
        </div>
        <div className="current-temperature">
          <span className="current-temperature-icon">☀️</span>
          <span className="current-temperature-value" id="current-temperature">
            24
          </span>
          <span className="current-temperature-unit">°C</span>
        </div>
      </div>
    </main>
  );
}

// get input value
// call api
// display data values
// display date and time
// dislay forecast
