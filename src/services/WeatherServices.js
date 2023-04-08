import axios from "axios";


export class WeatherService{
    static getCurrentWeather(city){
        return axios.get(`https://api.openweathermap.org/data/3.0/onecall?${city}&lat={53.669353}&lon={23.813131}&appid={32be222386cd98c762b5ab0c911ea4cc}`)
    }
}