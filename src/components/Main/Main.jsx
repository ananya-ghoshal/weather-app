import React from "react";
import Search from "./Search/Search";
import Dashboard from "./Dashboard/Dashboard";
import "./Main.css";
import Traffic from "./Dashboard/traffic/Traffic";
import Events from "./Dashboard/events/Events";
import Crops from "./Dashboard/crops/Crops";
import { Route, Routes } from "react-router-dom";

function Main() {
  return (
    <div className="main">
      <Search />
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/traffic" element={<Traffic />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/crops" element={<Crops />}></Route>
      </Routes>
    </div>
  );
}

export default Main;
