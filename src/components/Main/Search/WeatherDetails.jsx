import React from "react";
import "./Search.css";

import Clear from "../../../images/clear.png";
import Humidity from "../../../images/humidity.png";
import Wind from "../../../images/wind.png";
import Pressure from "../../../images/pressure.png";

function WeatherDetails(props) {
  return (
    <div className="weather-details">
      <div className="weather-details-label">
        <div style={{ color: "grey" }}>Feels like</div>
        <div style={{ color: "grey" }}>Humidity </div>
        <div style={{ color: "grey" }}>Wind speed </div>
        <div style={{ color: "grey" }}>Air pressure</div>
      </div>
      <div className="weather-details-info">
        <div className="weather-data">
          <img src={Clear} className="weather-icon" />
          {props.data.main.temp > 0
            ? "+" + props.data.main.temp.toFixed() + "°C"
            : "-" + props.data.main.temp.toFixed() + "°C"}
        </div>
        <div className="weather-data">
          <img src={Humidity} className="weather-icon" />
          {props.data.main.humidity}%
        </div>
        <div className="weather-data">
          <img src={Wind} className="weather-icon" alt="" />
          {props.data.wind.speed}km/h
        </div>
        <div className="weather-data">
          <img src={Pressure} className="weather-icon" />
          {props.data.main.pressure}hpa
        </div>
      </div>
    </div>
  );
}

export default WeatherDetails;
