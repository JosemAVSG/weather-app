import React, { useState, useEffect } from "react";
import { helpHttp } from "./helpers/helpHttp";

import "./App.css";
import "./helpers/helpHttp";
import { getCities } from "./helpers/ciuadades";
import { getWeather } from "./helpers/weather";
import Icons from "./helpers/icons";
import Select from "react-select";

function App() {
  const [contries, setContries] = useState([]);
  const [cities, setCities] = useState([]);
  const [weather, setWeather] = useState(null);
  const [icon, setIcon] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const API_URL = `https://restcountries.com/v3.1/all`;

      const [paises] = await Promise.all([helpHttp().get(API_URL)]);

      setContries(paises);
    };
    fetchData();
  }, []);

  const contriesHandler = async (e) => {
    console.log(e.value);
    e.value && setCities(await getCities(e.value));
    setWeather(null);
  };
  const cityHandler = async (e) =>
    e.value && setWeather(await getWeather(e.value));

  return (
    <>
      <div className="container">
        <h2>Weather APP</h2>
        <div className="row">
          <label htmlFor="paises">Elige un pais: </label>

          <Select 
            id="paises"
            options={contries
              .map((contries) => (
                  {key:contries.cca2, 
                  value:contries.cca2,
                 label:contries.name.common}
            ))
              .sort((a, b) =>
              a.label
              .toString()
              .toLowerCase()
              .localeCompare(b.label.toString().toLowerCase())
              )}
             
            onChange={contriesHandler}
      
          ></Select>
  

          {cities.length > 0 && (
            <div className="row">
              <label htmlFor="ciudad">Elige una ciudad: </label>
              <Select 
            id="ciudad"
            options={cities
              .map((city) => (
                  {key:city.id, 
                    value:city.name,
                  label:city.name}
            ))
              .sort((a, b) =>
              a.label
              .toString()
              .toLowerCase()
              .localeCompare(b.label.toString().toLowerCase())
              )}
            onChange={cityHandler}
      
          ></Select>
             
            </div>
          )}
        </div>
      </div>

      <div className="card">
        {weather && (
          <div className="card-container">
            <h2 className="city-name">{weather.name}</h2>
            <p className="temp"> {weather.main.temp.toFixed(0)}° </p>

            <p>Humedad: {weather.main.humidity}</p>
            {console.log(weather.weather[0].main)}
            <img
              className="icon"
              src={Icons(weather.weather[0].main)}
              alt="weather icon"
            ></img>

            <div className="card-footer">
              <p className="temp-max-min">
                {" "}
                {weather.main.temp_min}° | {weather.main.temp_max}°{" "}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
