import React from "react";
import "./searchWeather.css";

const WeatherUnit = (props) => {
  return (
    <div className="weather-units">
      <span className="current-temperature-value" id="current-temperature">
        {Math.round(props.celsius)}
      </span>
      <span className="current-temperature-unit"> °C </span>
    </div>
  );
};

export default WeatherUnit;
