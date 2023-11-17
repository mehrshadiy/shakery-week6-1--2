import {SearchForm} from "@/conponents/weather/SearchForm";
import {WeatherInfo} from "@/conponents/weather/WeatherInfo";
import {ForecastList} from "@/conponents/weather/ForecastList";
import {useState} from "react";

interface Props{
    city: string
}

export const Weather = ({city}: Props) => {

    const [weatherState, setWeatherState] = useState<Weather>({
        city: city,
        wind: '',
        humidity: '',
        description: '',
        icon: '',
        daily: []
    })
    
    // async function CallWeatherApi = () : void =>{
    //     await fetch()
    // }

    return (
        <div>
            <SearchForm/>
            <WeatherInfo/>
            <ForecastList/>
        </div>
    );
};