import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

import React, { useContext, useEffect, useState } from "react";
import cities from "../data/turkeyCities.json";
import WeatherContext from "../context/WeatherContext";
import axios from "axios";

const City = () => {
  const { selectedCity, setSelectedCity, setLat, setLon, lat, lon } =
    useContext(WeatherContext);

  const handleChange = (event) => {
    setSelectedCity(event.target.value);
    console.log(event.target.value);
  };

  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${selectedCity},TR&limit=3&appid=e9ad797a7733aa68d03e56331ad1ab42`
      )

      .then((res) => {
        setLat(res.data[0].lat);
        setLon(res.data[0].lon);
      });

    console.log(lat, lon);
  }, [selectedCity]);
  return (
    <div>
      <h1> Mustafa </h1>{" "}
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"> City </InputLabel>{" "}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="City"
          value={selectedCity}
          variant="filled"
          onChange={handleChange}
        >
          {cities.map((city, id) => (
            <MenuItem key={id} value={city.name}>
              {" "}
              {city.name}
            </MenuItem>
          ))}{" "}
        </Select>{" "}
      </FormControl>{" "}
    </div>
  );
};

export default City;
