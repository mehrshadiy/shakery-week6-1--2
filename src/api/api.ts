import {ForeCastResponse} from "@/types/api/ForecastResponce";
import {WeatherResponse} from "@/types/api/WaetherResponse";

const baseUrl : string = 'https://api.openweathermap.org/data/2.5/'
const apiKey : string = '3dce9b1c66837262a25b3f448d354a76'
const units : string = 'metric'

interface WeatherProps {
    city: string
}
interface ForecastProps {
    lat: number,
    lon: number
}

export async function callWeatherApi({city} : WeatherProps) : Promise<WeatherResponse> {
    const response = await fetch(baseUrl + `weather?q=${city}&appid=${apiKey}&units=${units}`)
    return await response.json()
}

export async function callForecastApi({lat,lon} : ForecastProps) : Promise<ForeCastResponse> {
    const response = await fetch(baseUrl + `onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`)
    return await response.json()
}