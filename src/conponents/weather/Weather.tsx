import {SearchForm} from "@/conponents/weather/SearchForm";
import {WeatherInfo} from "@/conponents/weather/WeatherInfo";
import {ForecastList} from "@/conponents/weather/ForecastList";

export const Weather = () => {
    return (
        <div>
            <SearchForm/>
            <WeatherInfo/>
            <ForecastList/>
        </div>
    );
};