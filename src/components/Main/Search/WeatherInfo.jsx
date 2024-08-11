import React from "react";
import "./Search.css";

import WeatherCard from "./WeatherCard";
import WeatherDetails from "./WeatherDetails";

function WeatherInfo(props) {
  return (
    <div className="weather-info">
      <WeatherCard data={props.data} />
      <WeatherDetails data={props.data} />
    </div>
  );
}

export default WeatherInfo;
