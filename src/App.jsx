import React from 'react'
import hotImg from "./assets/hot.jpg"
import coldImg from "./assets/cold.jpg"
import TempGrid from './components/TempGrid'

function App() {

// const [data, setData] = useState({})
// const [loading, setLoading] = useState(false)
// const [location, setLocation] = useState("")


// const searchLocation = async () => {
//   try {
//     setLoading(true);
//     const key = import.meta.env.WEATHER_API_KEY;
//     const response = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`
//     );

//     console.log(response);

//     setData(response);
//   } catch (error) {
//     console.error(`request has failed with status: ${response.status}`);
//   } finally {
//     setLoading(false);
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     searchLocation();
//   };

  return (
    <>
    <div className="app" style={{backgroundImage: `url(${coldImg})`}}>
    <div className="overlay">
      <div className="container">
        <div className="section section_input">
          <input type="text" name='city' placeholder='Enter City Name'/>
          <button>°F</button>
        </div>
        <div className="section section_temperature">
          <div className="icon">
            <h3>London, GB</h3>
            <img src="" alt="weather icon" />
            <h3>Cloudy</h3>
          </div>
          <div className="temperature">
            <h1>34 °C</h1>
          </div>
        </div>
        {/* bottom description */}
        <TempGrid />

      </div>
    </div>
      
    </div>
      {/* {loading ? (
        <div>
          <div className="container">
            <h1 className="header">Weather App</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search city"
              value={input.value}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
            <button className="btn" type="submit">
              Search
            </button>
          </form>
          <div className="temp">
            <div>Feels like</div>
          </div>
          <div className="wind">
            <div>Wind speed</div>
          </div>
          <div className="humid">
            <div>Humidity</div>
          </div>
        </div>
      ) : null} */}
    </>
  );
}

export default App
