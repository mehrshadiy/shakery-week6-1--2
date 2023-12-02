import {SearchForm} from "@/conponents/weather/SearchForm";
import {WeatherInfo} from "@/conponents/weather/WeatherInfo";
import {ForecastList} from "@/conponents/weather/ForecastList";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import {ApiLoader} from "@/conponents/share/ApiLoader/ApiLoader";
import useApiCall from "@/hook/useApiCall";
import {callForecastApi, callWeatherApi} from "@/api/api";
import {WeatherResponse} from "@/types/api/WaetherResponse";
import {ForecastProps, WeatherProps} from "@/types/api/FetcherProps";
import {ForeCastResponse} from "@/types/api/ForecastResponce";

interface Props {
    city: string
}

export const Weather = ({city}: Props) => {

    const [cityState, setCityState] = useState(city)
    const [cord, setCord] = useState({lat: 0, lon: 0})

    const {status, response} = useApiCall<WeatherResponse, WeatherProps>({func: callWeatherApi, params: {city: cityState}, refresh: [cityState]})
    const {status: ForecastStatus, response: ForecastResponse} = useApiCall<ForeCastResponse, ForecastProps>(
        {
            func: callForecastApi,
            params: cord,
            refresh: [cord],
            enabled: (cord.lat !== 0 && cord.lon !== 0)
        }
    )

    useEffect(
        () => {
            if (response) {
                setCord(response.coord)
            }
        },
        [response]
    )


    let weather: null | Weather = null

    if (response) {
        weather = {
            city: response.name,
            wind: response.wind.speed,
            humidity: response.main.humidity,
            description: response.weather[0].description,
            icon: response.weather[0].icon,
            daily: []
        }
    }

    return (
        <div className={'flex flex-col items-center bg-black'}>
            <Image src={'next.svg'} alt={'LOGO'} width={86} height={44}/>
            <div className={'bg-white shadow mt-4 rounded-2xl p-8 py-16 h-[500px] w-[750px]'}>
                <SearchForm city={cityState} setCityState={setCityState}/>

                <ApiLoader status={status}>
                    {
                        weather && <WeatherInfo weather={weather}/>
                    }
                    <ApiLoader status={ForecastStatus}>
                        {
                            ForecastResponse && <ForecastList forecast={ForecastResponse}/>
                        }
                    </ApiLoader>
                </ApiLoader>
            </div>
        </div>
    );
};