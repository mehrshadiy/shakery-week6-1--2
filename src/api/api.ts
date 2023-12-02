import {ForeCastResponse} from "@/types/api/ForecastResponce";
import {WeatherResponse} from "@/types/api/WaetherResponse";
import {ForecastProps, WeatherProps} from "@/types/api/FetcherProps";

const baseUrl: string = 'https://api.openweathermap.org/data/2.5/'
const apiKey: string = '3dce9b1c66837262a25b3f448d354a76'
const units: string = 'metric'


export async function callWeatherApi({city}: WeatherProps): Promise<WeatherResponse | false> {
    await sleep(2000)
    const response = await fetch(baseUrl + `weather?q=${city}&appid=${apiKey}&units=${units}`)
    if (response.ok) {
        return await response.json()
    } else {
        return false
    }
}

export async function callForecastApi({lat, lon}: ForecastProps): Promise<ForeCastResponse | false> {
    await sleep(5000)
    const response = await fetch(baseUrl + `onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`)
    if (response.ok) {
        return await response.json()
    } else {
        return false
    }
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))
