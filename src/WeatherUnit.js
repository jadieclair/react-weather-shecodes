import React from "react";

const WeatherUnit = (props) => {
  return (
    <div className="wherather-units">
      <span className="current-temperature-value" id="current-temperature">
        {Math.round(props.celsius)}
      </span>
      <span className="current-temperature-unit">°C</span>
    </div>
  );
};

export default WeatherUnit;
