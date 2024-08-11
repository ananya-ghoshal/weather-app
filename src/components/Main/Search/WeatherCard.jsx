import React from "react";
import "./Search.css";

import SunriseIcon from "../../../icons/sunrise.png";
import SunsetIcon from "../../../icons/sunset.png";

function WeatherCard(props) {
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();
  return (
    <div className="weather-card">
      {/* location  */}
      <div className="location">
        <p>{props.data.name}</p>
        <p>{currentDate}</p>
        <p>{currentTime}</p>
      </div>
      {/* Temperature display  */}
      <div className="weather-display">
        <div className="temp">
          {props.data.main.temp > 0 ? (
            <p className="tempDeg"> + {props.data.main.temp.toFixed()} °C</p>
          ) : (
            <p className="tempDeg"> - {props.data.main.temp.toFixed()} °C</p>
          )}
        </div>
      </div>
      {/* Sun timings  */}
      <div className="sun-timings">
        <p>
          <img src={SunriseIcon} />
          {new Date(props.data.sys.sunrise * 1000).toLocaleTimeString()}
        </p>
        <p>
          <img src={SunsetIcon} />
          {new Date(props.data.sys.sunset * 1000).toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
}

export default WeatherCard;
