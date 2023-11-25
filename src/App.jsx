import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopButtons from "./components/TopButtons";
import Search from "./components/Search";
import TimeAndLocation from "./components/TimeAndLocation";
import TempAndDetails from "./components/TempAndDetails";
import Forecast from "./components/Forecast";
import axios from "axios";
import { DateTime } from "luxon";

function App() {
  const [query, setQuery] = useState("");
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState("");
  const [localTime, setLocalTime] = useState("")

  const now = DateTime.now()

  const getWeatherData = async () => {
    try {
      // const url = import.meta.env.VITE_BASE_URL
      const key = import.meta.env.VITE_API_KEY;

      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=vienna&appid=${key}`
      );

      console.log(response.data);
      setWeather(response.data)
      setLocation(response.data.coord)

    } catch (error) {
      console.log("ERROR", error);
    }
  };

  useEffect(() => {
    getWeatherData();

    setLocalTime(now.toLocaleString(DateTime.DATETIME_MED)) //get current date and time in local using luxon library

    const message = query ? query : "current location"; 

    toast.info("Fetching weather for " + message);
  }, [query, units]);

  
 

  const changeBackground = () => {
    if (!weather) return "from-slate-500 to-slate-700";

    const threshold = units === "metric" ? 20 : 60;

    if (weather.temp <= threshold) return "from-slate-500 to-slate-700";

    return "from-yellow-400 to-orange-500";
  };

  changeBackground();

  return (
    <>
      <div
        className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-slate-500 to-slate-700 h-fit shadow-xl shadow-gray-400 ${changeBackground()}`}
      >
        <TopButtons setQuery={setQuery} />
        <Search setQuery={setQuery} units={units} setUnits={setUnits} />

        <TimeAndLocation localTime={localTime} />
        <TempAndDetails weather={weather} />

        <Forecast title="hourly forecast" />
        <Forecast title="daily forecast" />

        {/* {weather && (
          <>
            <TimeAndLocation weather={weather} />
            <TempAndDetails weather={weather} />

            <Forecast title="hourly forecast" />
            <Forecast title="daily forecast" />
          </>
        )} */}

        <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
      </div>
    </>
  );
}

export default App;
