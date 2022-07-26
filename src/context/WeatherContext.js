import { createContext, useState } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState("Ankara");
  const [lat, setLat] = useState("39.6473917");
  const [lon, setLon] = useState("27.8879787");
  const [weather, setWeather] = useState([]);

  const values = {
    selectedCity,
    setSelectedCity,
    lat,
    setLat,
    lon,
    setLon,
    weather,
    setWeather,
  };
  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export default WeatherContext;
