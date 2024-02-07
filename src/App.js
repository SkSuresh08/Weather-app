import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


const api=
{
   key: 'c20149ea8488aac50c11dbb67fab2588',
   base: "https://api.openweathermap.org/data/2.5/",

};
function App() {

  const [search,setSearch]= useState("");

  const [weather,setWeather]=useState({});

  const searchPressed=()=>{
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then(res => res.json())
    .then(result=> {
      setWeather(result);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src='Weather.png'/>
        <h1>Weather</h1>
        <div>
        <input type="text" placeholder='Enter City..' onChange={(e)=> setSearch(e.target.value)}
      />

      
      </div>
      <br></br>
      <button onClick={searchPressed}>Search</button>
      {typeof weather.main != "undefined" ? (
        <div> 
       <p>{weather.name}</p>
       <p>{weather.main.temp} *C</p>
       <p>{weather.weather[0].main}</p>
       <p>{weather.weather[0].description}</p>
       </div>
      ):(
       ""
      )
      }
      
 
      </header>
    </div>
  );
}

export default App;
