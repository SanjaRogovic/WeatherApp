import React, { useState, useEffect } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import Loader from "./components/Loader";
import { getWeatherData } from "./components/GetData";
import { DateTime } from "luxon";

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [localTime, setLocalTime] = useState("");

  const now = DateTime.now();
  console.log(localTime);

  const fetchWeather = async () => {
    try {
      setLoading(true);
      const data = await getWeatherData(city);
      console.log(data);
      setWeather(data);

      if (!city || city === "") return;
    } catch (error) {
      console.log("ERROR FETCHING DATA", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();

    setLocalTime(now.toLocaleString(DateTime.DATETIME_MED));

    // const message = city ? city : null;
    // toast.info("Fetching weather for " + message);
  }, []);


  return (
    <>
      <h1>Weather Forecast</h1>

      {!weather || loading ? (
        <div className="box">
          <input
            type="text"
            className="input"
            value={city}
            placeholder="search for location ..."
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <button
            type="submit"
            className="button"
            onClick={() => fetchWeather()}
          >
            SEARCH
          </button>
        </div>
      ) : (
        <>
          {weather !== null ? (
            <div className="box">
              <div className="inner-box">
                <div className="location">
                  <h3>
                    <i className="fa fa-street-view"></i>
                    {weather.name} | {weather.sys.country}
                  </h3>
                  <p className="time">{localTime}</p>
                </div>
                <div className="weather-icon">
                  <img
                    src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                    alt="imgicon"
                  />
                </div>
                <h4>{weather.weather[0].main}</h4>
                <div className="temperature">
                  <p>
                    {parseFloat(weather.main.temp - 273.15).toFixed(1)} &deg;C
                  </p>
                </div>

                <div className="temperature-range">
                  <h6>
                    Min: {parseFloat(weather.main.temp_min - 273.15).toFixed(1)}
                    &deg;C || Max:{" "}
                    {parseFloat(weather.main.temp_max - 273.15).toFixed(1)}
                    &deg;C || Humidity: {weather.main.humidity}%
                  </h6>
                </div>
              </div>
            </div>
          ) : (
            <Loader />
          )}
        </>
      )}

      {/* <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} /> */}
    </>
  );
}

export default App;
