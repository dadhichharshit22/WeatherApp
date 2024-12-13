import React from 'react'
import { useState, useEffect } from 'react'

const Data =  ({city}) => {
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
      {/* <h1 className="text-white">Weather</h1> */}
     <h1> {temp} </h1>
      <h1> {humidity} </h1>
     <h1> {weatherdes} </h1>
      <h1>{name} </h1>
    </>
  );
};

export default Data


