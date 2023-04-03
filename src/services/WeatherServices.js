export class WeatherService{
    static getCurrentWeather(city){
        return axios.get('https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={32be222386cd98c762b5ab0c911ea4cc}')
    }
}