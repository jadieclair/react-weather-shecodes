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
          <CustomDate date={props.seeData.date} />
        </div>
        <div className="col-4 mt-3">
          <div className="current-details text-capitalize">
            <br />
            {props.seeData.description}
            <div>
              Humidity: <strong>{props.seeData.humidity}%</strong>
            </div>
            <div>
              Wind: <strong>{props.seeData.wind}km/h</strong>
            </div>
          </div>
        </div>

        <div className="col-4 current-temperature">
          <span className="current-temperature-icon">
            <WeatherIcon code={props.seeData.iconUrl} />
          </span>
          <WeatherUnit celsius={props.seeData.temp} />
        </div>
      </div>
    </div>
  );
}
