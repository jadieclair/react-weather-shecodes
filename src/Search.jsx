import React, { useState } from "react";
import axios from "axios";
import "./search.css";

export default function Search() {
  const [city, setCity] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    const key = "6d44bd5412a31a5753bfb26cca847f85";
    const units = "metric";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=${units}`;

    axios.get(apiUrl).then(showWeather);
  }

  function showWeather(response) {
    console.log(response.data);
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  return (
    <div className="header-container">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a City..."
          className="search-input"
          onChange={handleChange}
        />
        <input type="submit" vlaue="Search" className="search-button" />
      </form>
    </div>
  );
}
