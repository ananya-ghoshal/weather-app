import { React, useState } from "react";
import "./Search.css";

import SearchIcon from "../../../icons/search.svg";
import CalendarIcon from "../../../icons/events.svg";

import SunriseIcon from "../../../icons/sunrise.png";
import SunsetIcon from "../../../icons/sunset.png";

import Clear from "../../../images/clear.png";
import Humidity from "../../../images/humidity.png";
import Wind from "../../../images/wind.png";
import Pressure from "../../../images/pressure.png";
import axios from "axios";

function Search() {
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const apiKey = "e191f9c1ba3604661727c459541f1b8c";
  const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${location}&units=imperial&appid=${apiKey}`;
  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };
  return (
    <div className="search-main">
      <div className="search">
        <div className="search_city">
          <img src={SearchIcon} className="search-icons" />
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyPress={searchLocation}
            placeholder="Enter City"
            type="text"
          />
        </div>
        <div className="search_date">
          <img src={CalendarIcon} className="search-icons" />
          <input type="date" placeholder="Enter date"></input>
        </div>
      </div>
      {data.name !== undefined && (
        <div className="weather-info">
          {/* Weather card  */}
          <div className="weather-card">
            {/* location  */}
            <div className="location">
              <p>{data.name}</p>
              <p>{currentDate}</p>
              <p>{currentTime}</p>
            </div>
            {/* Temperature display  */}
            <div className="weather-display">
              <div className="temp">
                {data.main.temp > 0 ? (
                  <p className="tempDeg"> + {data.main.temp.toFixed()} °C</p>
                ) : (
                  <p className="tempDeg"> - {data.main.temp.toFixed()} °C</p>
                )}
              </div>
            </div>
            {/* Sun timings  */}
            <div className="sun-timings">
              <p>
                <img src={SunriseIcon} />
                {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
              </p>
              <p>
                <img src={SunsetIcon} />
                {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
              </p>
            </div>
          </div>

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
                {data.main.temp > 0
                  ? "+" + data.main.temp.toFixed() + "°C"
                  : "-" + data.main.temp.toFixed() + "°C"}
              </div>
              <div className="weather-data">
                <img src={Humidity} className="weather-icon" />
                {data.main.humidity}%
              </div>
              <div className="weather-data">
                <img src={Wind} className="weather-icon" alt="" />
                {data.wind.speed}km/h
              </div>
              <div className="weather-data">
                <img src={Pressure} className="weather-icon" />
                {data.main.pressure}hpa
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
