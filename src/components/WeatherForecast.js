import React, {
    useContext,
    useState
} from 'react'
import WeatherContext from '../context/WeatherContext'
import axios from "axios"

const WeatherForecast = () => {
    const [lat, setLat] = useState("")
    const [lon, setLon] = useState("")
    const {selectedCity} = useContext(WeatherContext)
    
    axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${selectedCity},TR&limit=3&appid=e9ad797a7733aa68d03e56331ad1ab42`)
    .then((res) => {
        return(
            setLat(res.data[0].lat),
            setLon(res.data[0].lon)
            
       

    )})

    axios(`api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=5&appid=e9ad797a7733aa68d03e56331ad1ab42`)
    .then((res)=>console.log(res))
    
    return ( <
        div > {selectedCity} < /div>
    )
}

export default WeatherForecast