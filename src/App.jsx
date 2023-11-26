import React, { useState, useEffect } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import GetData from "./components/GetData";
// import Error from "./components/Error";
// import Loader from "./components/Loader";
// import axios from "axios";
// import { DateTime } from "luxon";

function App() {
 

  // useEffect(() => {
  //   getWeatherData();

  //   setLocalTime(now.toLocaleString(DateTime.DATETIME_MED)) //get current date and time in local using luxon library

  //   const message = query ? query : "current location"; 

  //   toast.info("Fetching weather for " + message);
  // }, [query, units]);

  
 

 

  return (
    <>
      <div>
        <h1>Weather Forecast</h1>
        <GetData />

        {/* <ToastContainer autoClose={3000} theme="colored" newestOnTop={true} /> */}
      </div>
    </>
  );
}

export default App;
