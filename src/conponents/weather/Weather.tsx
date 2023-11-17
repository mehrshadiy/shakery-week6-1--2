import {SearchForm} from "@/conponents/weather/SearchForm";
import {WeatherInfo} from "@/conponents/weather/WeatherInfo";
import {ForecastList} from "@/conponents/weather/ForecastList";
import {useState} from "react";
import {callWeatherApi} from "@/api/api";

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
    }

    if (weatherState.city.length === 0) {
        getWeatherData(city)
    }

    return (
        <div className={'bg-white shadow mt-4 rounded-2xl p-8 py-16'}>
            <SearchForm city={city} getWeatherData={getWeatherData}/>
            <WeatherInfo weather={weatherState}/>
            <ForecastList/>
        </div>
    );
};