import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

import React, { useContext, useState } from "react";
import cities from "../data/turkeyCities.json";
import WeatherContext from "../context/WeatherContext";

const City = () => {
  const { selectedCity, setSelectedCity } = useContext(WeatherContext);

  const handleChange = (event) => {
    setSelectedCity(event.target.value);
  };

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
