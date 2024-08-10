import "./App.css";
import Main from "./components/Main/Main";
import Sidenav from "./components/Sidenav/Sidenav";

function App() {
  return (
    <div className="container">
      <Sidenav />
      <Main />
    </div>
  );
}

export default App;
