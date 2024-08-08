import React from "react";
import "./Sidenav.css";
import { Link } from "react-router-dom";
import Dashboard from "../../icons/dashboard.svg";
import TrafficIcon from "../../icons/traffic.svg";
import CropIcon from "../../icons/crops.svg";
import EventIcon from "../../icons/events.svg";

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
          <img className="icons" src={TrafficIcon}></img>
          Traffic
        </button>
      </Link>
      <Link to="/crops" style={{ textDecoration: "none" }}>
        <button className="sidenav-element">
          <img className="icons" src={CropIcon}></img>
          Crop Yield
        </button>
      </Link>
      <Link to="/events" style={{ textDecoration: "none" }}>
        <button className="sidenav-element">
          <img className="icons" src={EventIcon}></img>
          Events
        </button>
      </Link>
    </div>
  );
}

export default Sidenav;
