import React from "react";
import CustomDate from "./CustomDate";
import WeatherIcon from "./WeatherIcon";
import WeatherUnit from "./WeatherUnit";

export default function Weather(props) {
  return (
    <div className="row">
      <div className="current-weather mt-4">
        <div className="col-4">
          <h1 className="current-city" id="current-city">
            {props.seeData.city}
          </h1>
          <div className="current-date">
            <CustomDate date={props.seeData.date} />
          </div>
        </div>
        <div className="col-4">
          <div className="current-details text-capitalize">
            <br />
            <div className="mb-2">{props.seeData.description}</div>
            <div className="mb-2">
              Humidity: <strong>{props.seeData.humidity}%</strong>
            </div>
            <div>
              Wind: <strong>{Math.round(props.seeData.wind)}km/h</strong>
            </div>
          </div>
        </div>

        <div className="col-4 current-temperature">
          <span className="current-temperature-icon">
            <WeatherIcon code={props.seeData.iconUrl} />
          </span>
          <span className="current-temperature-value">
            <WeatherUnit celsius={props.seeData.temp} />
          </span>
        </div>
      </div>
    </div>
  );
}
