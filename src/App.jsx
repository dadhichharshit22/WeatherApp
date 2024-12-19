import { useState } from "react";
import Data from "./Data";
import  {MoreDesc}  from "./MoreDesc";
import {  Navigate, Route, Routes,useNavigate } from "react-router-dom";

function App() {
  const [cityData, setCityData] = useState([]);
  const [cityName, setCityName] = useState("");

  const navigate = useNavigate();
  const gotodesc = () => {
    navigate("/cityName");
  }
 
  
  const addCity = (e) => {

    e.preventDefault();
    
    if (cityName && !cityData.includes(cityName)) {
      
      setCityData([...cityData, cityName]); 
      setCityName(""); 
    }

  };



  const deleteCity = (cityDelete) =>{

    setCityData(cityData.filter((city) => { return city != cityDelete }))

  }

  return (
    <div className="w-full bg-slate-900 h-screen text-white gap-2 flex justify-center items-center flex-col ">
      <form className="bg-white text-black rounded-md p-4 flex justify-start items-center flex-col h-1/3 w-1/2 gap-6 ">
        <h1 className="text-4xl font-bold underline">Weather APP</h1>
        <input
          className="bg-white text-black border-2 p-2 border-rounded-md capitalize"
          value={cityName}
          onChange={(e) => {
            setCityName(e.target.value);
          }}
        />
        <div className="flex flex-row space-x-2">
        <button
          onClick={addCity}
          className="bg-blue-700 text-white p-2 rounded-md font-semibold"
        >
          Add City
        </button>
        <button onClick={gotodesc}
        className="bg-blue-700 text-white p-2 rounded-md font-semibold">
          More details
        </button>
       
        </div>
      </form>
      <ul className="w-full flex justify-start items-center flex-col gap-2">
        {cityData.map((city) => {
          return (
            <li
              className=" bg-white  flex items-center justify-between flex-row p-2 text-black w-1/2 h-20  rounded-md"
              key={city}
            >
              <Data city={city} />
              <button
                className="bg-red-700 text-white p-1 rounded-md font-semibold"
                onClick={() => deleteCity(city)}
              >
                Delete City
              </button>
            </li>
          );
        })}
      </ul>

      <Routes>
        <Route path="/cityName" element={<MoreDesc/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
