import React from "react";
import "./weatherForecast.css";
import WeatherIcon from "./WeatherIcon";

const WeatherForecastDay = (props) => {
  const maxTemp = () => {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  };

  const minTemp = () => {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  };

  const day = () => {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let date = new Date(props.data.dt * 1000);
    let day = days[date.getDay()];
    return day;
  };

  return (
    <div className="daily-forecast">
      <div className="forecast-day mb-2">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={30} />
      <div className="forecast-temps">
        <span className="forecast-temp-max">{maxTemp()}</span>
        <span className="forecast-temp-min">{minTemp()}</span>
      </div>
    </div>
  );
};

export default WeatherForecastDay;
