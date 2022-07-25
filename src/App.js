import "./App.css";
import City from "./components/City";
import WeatherContext from "./context/WeatherContext";

function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherContext.Provider value="Ankara">
          <City />
        </WeatherContext.Provider>
      </div>
    </div>
  );
}

export default App;
