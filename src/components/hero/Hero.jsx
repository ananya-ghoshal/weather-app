import React from "react";
import "./Hero.css";
import Search from "../../icons/search.svg";
import CalendarIcon from "../../icons/events.svg";

function Main() {
  return (
    <div className="hero">
      <div className="search">
        <div className="search_city">
          <img src={Search} className="icons" />
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter City"
            type="text"
          />
        </div>
        <div className="search_date">
          <div className="search_date">
            <img src={CalendarIcon} className="icons" />
            <input type="date" placeholder="Enter date"></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
