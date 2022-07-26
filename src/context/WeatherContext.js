import { createContext, useState } from "react";

const WeatherContext = createContext();




export const  WeatherProvider = ({children}) => {
    const [selectedCity, setSelectedCity] = useState("Ankara")
const values={
    selectedCity,setSelectedCity
}
  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  )
}



export default WeatherContext;
