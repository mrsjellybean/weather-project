import './App.css';
import Data from "./Data";
import Search from "./Search";
import Button from "./Button";
import Open from "./Open";
import Forecast from "./Forecast";
import Properties from "./Properties";
export default function App() {
  return (
    <div className="App">
      <div className="container border box">
        <div className="row header border">
          <div className="col-2">
            <Data />
          </div>
          <div className="col-2">
            <Properties />
          </div>
          <div className="col">
            <Search />
          </div>
        </div>
        <div className="row naming ">
          <div className="col">
            <Button />
          </div>
        </div>
        <div className="row forecast">
          <div className="col first-day">
            <Forecast />
          </div>
          <div class="col second-day">
            <Forecast />
          </div>
          <div class="col third-day">
            <Forecast />
          </div>
          <div class="col fourth-day">
            <Forecast />
          </div>
          <div class="col fifth-day">
            <Forecast />
          </div>
        </div>
        <div className="open">
          <Open />
        </div>
      </div>
    </div>
  );
}



