import {WeatherIcon} from "@/conponents/weather/WeatherIcon";

interface Props {
    weather: Weather
}

export const WeatherInfo = ({weather}: Props) => {
    return (
        <div className={'grid grid-cols-2 mb-12'}>
            <div>
                <h1 className={'text-2xl'}>
                    {weather.city}
                    <div>
                        {weather.description}
                    </div>
                    <div>
                        Humidity: <span className={'text-primary'}>{weather.humidity}</span>, wind: <span
                        className={'text-primary'}>{weather.wind} km/h</span>
                    </div>
                </h1>
            </div>
            <div>
                <div className={'flex justify-end'}>
                    <WeatherIcon size={56} icon={weather.icon}/>
                </div>
            </div>
        </div>
    );
};