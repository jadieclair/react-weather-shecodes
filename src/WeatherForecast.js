import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./weatherForecast.css";

const WeatherForecast = () => {
  return (
    <div className="row">
      <div className="col weather-forecast">
        <div className="forecast-day">Thur</div>
        <WeatherIcon code="01d" size={30} />
        <div className="forecast-temps">
          <span className="forecast-temp-max">19°</span>
          <span className="forecast-temp-min">10°</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherForecast;
