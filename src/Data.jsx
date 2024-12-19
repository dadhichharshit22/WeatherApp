import React from "react";
import { useState, useEffect } from "react";

const WeatherData = async (city) => {
  const apiKey = import.meta.env.VITE_KEY;
  // console.log(apiKey);

  // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const dataWeather = await fetch(url)
    .then((response) => response.json())
    .then((data) => {
     

      return data;
    })
    .catch((error) => console.error("Error fetching weather data:", error));

  return dataWeather;
};

const Data = ({ city }) => {
  const [WData, setWData] = useState();

  useEffect(() => {
    const WdataW = async () => {
      const d = await WeatherData(city);
      setWData(d);
    };

    WdataW();
  }, [city]);

  console.log(WData);

  if (!WData || WData.cod !== 200) {
    return <div>Error fetching weather data. Please try again later.</div>;
  }

  const { main, weather, name } = WData;
  const { temp, humidity } = main;

  const weatherdes = weather[0].description;
  return (
    <>
      <div className="">
        <div className="font-semibold text-xl">{WData.name}, <span>{WData.sys.country}</span></div>

        <div className="font-semibold text-xl">{WData.main.temp}</div>
      </div>
    </>
  );
};

export default Data;
