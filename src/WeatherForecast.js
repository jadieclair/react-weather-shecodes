import React, { useState, useEffect } from "react";
import axios from "axios";
import "./weatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

const WeatherForecast = (props) => {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  const handleResponse = (response) => {
    setForecast(response.data.daily);
    setLoaded(true);
    console.log(response.data);
  };

  if (loaded) {
    return (
      <div className="weather-forecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            }

            return null;
          })}
        </div>
      </div>
    );
  } else {
    const key = "5f472b7acba333cd8a035ea85a0d4d4c";
    const longitude = props.coordinates.lon;
    const latitude = props.coordinates.lat;
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
};

export default WeatherForecast;
