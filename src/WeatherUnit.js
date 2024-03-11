import React, { useState } from "react";

const WeatherUnit = (props) => {
  const [changeUnit, setChangeUnit] = useState("celsius");

  const convertToFahrenheit = (event) => {
    event.preventDefault();
    setChangeUnit("fahrenheit");
  };

  const convertToCelsius = (event) => {
    event.preventDefault();
    setChangeUnit("celsius");
  };

  if (changeUnit === "celsius") {
    return (
      <div className="weather-units">
        <span className="current-temperature-value" id="current-temperature">
          {Math.round(props.celsius)}
        </span>
        <span className="current-temperature-unit">
          °C |{" "}
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="weather-units">
        <span className="current-temperature-value" id="current-temperature">
          {Math.round((props.celsius * 9) / 5 + 32)}
        </span>
        <span className="current-temperature-unit">
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
};

export default WeatherUnit;
