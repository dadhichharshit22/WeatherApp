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

      <div className=" bg-white   text-black w-full h-20  rounded-md">
        Hello
      </div>


      <h1> {WData.main.temp} </h1>
      <h1> {WData.main.humidity} </h1>
      <h1> {weatherdes} </h1>
      <h1>{WData.name} </h1>
    </>
  );
};

export default Data;
