import axios from 'axios'
const API_KEY = process.env.VUE_APP_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';
const UNIT_TYPE = 'metric'

export default{
    getWeatherByCityName(city_name){
        return axios.get(`${BASE_URL}weather?q=${city_name}&units=${UNIT_TYPE}&APPID=${API_KEY}`);
    },
    getWeatherByCoordinates(lat,lon){
        return axios.get(`${BASE_URL}weather?lat=${lat}&lon=${lon}&units=${UNIT_TYPE}&APPID=${API_KEY}`);
    }
}