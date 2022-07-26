import React, { useContext, useEffect, useState } from "react";
import WeatherContext from "../context/WeatherContext";
import axios from "axios";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const WeatherForecast = () => {
  const { selectedCity, lat, lon, weather, setWeather } =
    useContext(WeatherContext);

  useEffect(() => {
    axios(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e9ad797a7733aa68d03e56331ad1ab42`
    ).then((res) => setWeather(res.data));
    console.log(weather);
  }, []);

  //   console.log(lat, lon);

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="240"
            // image={
            //   { weather } === []
            //     ? null
            //     : `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
            // }
            alt="weather icon"
          />
          <CardContent>
            <Typography gutterBottom variant="h3" component="div">
              {selectedCity}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {/* Max Temp: {Math.floor((weather.main.temp_max - 32) / 1.8)} °C */}
              <br />
              {/* Min Temp:{Math.floor((weather.main.temp_min - 32) / 1.8)} °C */}
            </Typography>
            <Typography variant="body2" color="text.warning">
              {/* {weather.weather[0].description} */}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default WeatherForecast;
