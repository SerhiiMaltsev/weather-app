import './Weather.css';
import {TextField, Button, FormControl, InputLabel, Select, MenuItem} from "@mui/material/";
import { useState, useEffect } from 'react';
import useFetch from "react-fetch-hook";
import axios from "axios";
import Tomorrow from "./Tomorrow.js"
import NextWeek from "./NextWeek.js"

function Weather() {
  const [city, setCity] = useState('Brooklyn');
  const [state, setState] = useState('New York');
  const [country, setCountry] = useState('United States');
  const [weatherData, setWeatherData] = useState();

  function getGeo() {
    fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + city + "," + state + "," + country + "&limit=1&appid=" + process.env.REACT_APP_API_KEY2)
    .then((res) => res.json())
    .then((data) => fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + data[0].lat + "&lon=" + data[0].lon + "&appid="  + process.env.REACT_APP_API_KEY3)
    .then((res) => res.json())
    .then((data) => setWeatherData(data)))
  }

  if (weatherData){
    var temperature = (1.8*(Number(weatherData.current.temp)-273)+32).toFixed(2);
    var feels_like = (1.8*(Number(weatherData.current.feels_like)-273)+32).toFixed(2);
    return (
      <div className="Weather">
        <h2> Weather </h2>
        <TextField id="City" label="City" variant="outlined" value={city} onChange={(e) => {setCity(e.target.value)}}/>
        <TextField id="State" label="State (optional)" variant="outlined" value={state} onChange={(e) => {setState(e.target.value)}}/>
        <TextField id="City" label="Country" variant="outlined" value={country} onChange={(e) => {setCountry(e.target.value)}}/>
        <p> </p>
        <Button variant="outlined" onClick={getGeo}>Show Weather</Button>
        <h3> Current Weather </h3>
        <p> Current Temperature: {temperature} F</p>
        <p> Feels Like: {feels_like} F</p>
        <p> Humidity: {weatherData.current.humidity}%</p>
        <h3> Tomorrow </h3>
        <Tomorrow data = {weatherData.hourly}/>
        <h3> Next Week </h3>
        <NextWeek data = {weatherData.daily}/>
      </div>
    );
  }else{
    return (
      <div className="Weather">
        <h2> Weather </h2>
        <TextField id="City" label="City" variant="outlined" value={city} onChange={(e) => {setCity(e.target.value)}}/>
        <TextField id="State" label="State (optional)" variant="outlined" value={state} onChange={(e) => {setState(e.target.value)}}/>
        <TextField id="City" label="Country" variant="outlined" value={country} onChange={(e) => {setCountry(e.target.value)}}/>
        <p> </p>
        <Button variant="outlined" onClick={getGeo}>Show Weather</Button>
      </div>
    );
  }
}

export default Weather;
