import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import cities from "../data/turkeyCities.json";
import WeatherContext from "../context/WeatherContext";

const City = () => {
  const city = useContext(WeatherContext);
  console.log(city);
  const [cits, setCits] = useState("");
  const handleChange = (event) => {
    setCits(event.target.value);
  };
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">City</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="City"
          value={cits}
          variant="filled"
          onChange={handleChange}
        >
          {cities.map((city, id) => (
            <MenuItem key={id} value={city.name}>
              {city.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default City;
