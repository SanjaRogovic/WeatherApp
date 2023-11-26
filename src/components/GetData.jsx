import React, {useState, useEffect} from 'react'
import Display from "../components/Display";
import axios from "axios"

const GetData = () => {

    const [query, setQuery] = useState("")
    const [weather, setWeather] = useState({
        lat: 0,
        lon: 0, 
        city: "",
        country: "",
        temp: 0,
        feels: 0,
        temp_min: 0,
        temp_max: 0,
        sunrise: 0,
        sunset: 0,
        wind: 0,
        description: "",
    })

    
    const fetchWeather = async () => {
        try {
            const appid = import.meta.env.VITE_API_KEY

            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${appid}`)
            console.log(response.data)
            setWeather({
                lat: response.data.coord.lat,
                lon: response.data.coord.lon, 
                city: response.data.name,
                country: response.data.sys.country,
                temp: response.data.main.temp,
                feels: response.data.main.feels_like,
                temp_min: response.data.main.temp_min,
                temp_max: response.data.main.temp_max,
                sunrise: response.data.sys.sunrise,
                sunset: response.data.sys.sunset,
                wind: response.data.wind.speed,
                description: response.data.weather[0].description,
            })  
        } catch (error) {
            console.log("ERROR FETCHING DATA", error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!query || query === '') return
        fetchWeather();
        setQuery("")
    }


    useEffect(() => {
        fetchWeather()
    }, [])


  return (
    <div className="box">
      <form type="text" required onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={query}
          placeholder="search for location ..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          SEARCH
        </button>
      </form>

      {weather ?  <Display /> : null}

    

    </div>
  );
}

export default GetData