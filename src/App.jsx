import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidenav from "./components/nav/Sidenav";
import Hero from "../src/components/hero/Hero";
import Traffic from "../src/components/traffic/Traffic";
import Events from "../src/components/events/Events";
import Crops from "../src/components/crops/Crops";
function App() {
  return (
    <div className="container">
      <Sidenav />
      <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/traffic" element={<Traffic />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/crops" element={<Crops />}></Route>
      </Routes>
    </div>
  );
}

export default App;
