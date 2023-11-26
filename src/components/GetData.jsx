import React, {useState, useEffect} from 'react'
import axios from "axios"

const GetData = () => {

    const [query, setQuery] = useState("")
    const [weather, setWeather] = useState(null)

    const fetchWeather = async () => {
        try {

            const response = await axios.get("")
            console.log(response)
            
        } catch (error) {
            console.log("ERROR", error)
        }
    }




    const onSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <div className="box">
      <form type="text" required onSubmit={onSubmit}>
        <input
          type="text"
          className="input"
          placeholder="search for location ..."
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit" className="button" onClick={onSubmit}>
          SEARCH
        </button>
      </form>
    </div>
  );
}

export default GetData