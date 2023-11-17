import {SearchForm} from "@/conponents/weather/SearchForm";
import {WeatherInfo} from "@/conponents/weather/WeatherInfo";
import {ForecastList} from "@/conponents/weather/ForecastList";
import {useState} from "react";
import {callForecastApi, callWeatherApi} from "@/api/api";
import {ForeCastResponse} from "@/types/api/ForecastResponce";

interface Props {
    city: string
}

export const Weather = ({city}: Props) => {

    const [weatherState, setWeatherState] = useState<Weather>({
        city: '',
        wind: 0,
        humidity: 0,
        description: '',
        icon: '',
        daily: []
    })

    const [forecastState, setForecastState] = useState<ForeCastResponse | null>(null)

    const getWeatherData = async (city: string) => {
        const response = await callWeatherApi({city})

        const weather: Weather = {
            city: response.name,
            wind: response.wind.speed,
            humidity: response.main.humidity,
            description: response.weather[0].description,
            icon: response.weather[0].icon,
            daily: []
        }
        setWeatherState(weather)

        const forecastResponse = await callForecastApi({lat: response.coord.lat,lon: response.coord.lon})
        setForecastState(forecastResponse)
    }

    if (weatherState.city.length === 0) {
        getWeatherData(city)
    }

    return (
        <div className={'bg-white shadow mt-4 rounded-2xl p-8 py-16'}>
            <SearchForm city={city} getWeatherData={getWeatherData}/>
            <WeatherInfo weather={weatherState}/>
            <ForecastList forecast={forecastState}/>
        </div>
    );
};