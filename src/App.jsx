import { useState } from 'react'
import './App.css'
import Data from './Data'

function App() {
  const [cityName, setcityName] = useState("")



  return (
    <>
      <h1> Weather APP</h1>
      <input className='bg-white text-black'
       value={cityName}
       onChange={(e)=>{setcityName(e.target.value)}}
      />
      
      <Data  city={cityName}/>
    </>
  );
}

export default App
