import React from "react";
import "./Sidenav.css";
import { Link } from "react-router-dom";
import Dashboard from "../../icons/dashboard.svg";
import CropIcon from "../../icons/crops.svg";
import ForecastIcon from "../../icons/forecast.svg";
import PrecipitationIcon from "../../icons/precipitation.png";

function Sidenav() {
  return (
    <div className="sidenav">
      <Link to="/" style={{ textDecoration: "none" }}>
        <button className="sidenav-element">
          <img className="icons" src={Dashboard}></img>
          Dashboard
        </button>
      </Link>
      <Link to="/traffic" style={{ textDecoration: "none" }}>
        <button className="sidenav-element">
          <img className="icons" src={PrecipitationIcon}></img>
          Precipitaion
        </button>
      </Link>
      <Link to="/events" style={{ textDecoration: "none" }}>
        <button className="sidenav-element">
          <img className="icons" src={ForecastIcon}></img>
          10 Day forecast
        </button>
      </Link>
      <Link to="/crops" style={{ textDecoration: "none" }}>
        <button className="sidenav-element">
          <img className="icons" src={CropIcon}></img>
          Crop Yield
        </button>
      </Link>
    </div>
  );
}

export default Sidenav;
