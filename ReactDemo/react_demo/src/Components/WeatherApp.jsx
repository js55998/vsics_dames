import React, { useState } from "react";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={25e049ca71b2c83cfeaab733c7659e6c}`
    );
    const data = await response.json();
    setWeather(data);
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input value={city} onChange={(e) => setCity(e.target.value)} />
      <button onClick={fetchWeather}>Fetch Weather</button>
      {weather && <div>{JSON.stringify(weather)}</div>}
    </div>
  );
};

export default WeatherApp;
