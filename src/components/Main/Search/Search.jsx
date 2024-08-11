import { React, useState } from "react";
import "./Search.css";

import SearchIcon from "../../../icons/search.svg";
import CalendarIcon from "../../../icons/forecast.svg";

import axios from "axios";
import WeatherInfo from "./WeatherInfo";

function Search() {
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
      {data.name !== undefined && <WeatherInfo data={data} />}
    </div>
  );
}

export default Search;
