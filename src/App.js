import "./App.css";
import City from "./components/City";
import WeatherForecast from "./components/WeatherForecast";
import { WeatherProvider } from "./context/WeatherContext";

function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherProvider>
          <City />
          <WeatherForecast />
        </WeatherProvider>
      </div>
    </div>
  );
}

export default App;
