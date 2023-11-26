import axios from 'axios';

const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?';
const apiKey = import.meta.env.VITE_API_KEY;

export const getWeatherData = async (city) => {
    try{
        const {data} = await axios.get(baseUrl + `q=${city}&appid=${apiKey}`);
        return data;
    }catch(error) {
        throw error;
    }
}

export default getWeatherData