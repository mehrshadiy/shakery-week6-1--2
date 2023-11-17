import {Daily} from "@/types/api/ForecastResponce";
import {WeatherIcon} from "@/conponents/weather/WeatherIcon";

interface Props {
    item: Daily
}

export const ForecastItem = ({item} : Props) => {

    let day : string = new Date(item.dt * 1000).toLocaleString('en-us',{weekday:'long'})

    return (
        <div className={"flex justify-center items-center flex-col"}>
            <div>{day}</div>
            <WeatherIcon icon={item.weather[0].icon} size={36}/>
            <div className={'mt-3'}>
                <span className={'text-primary'}>{item.temp.min}</span>
                -
                <span className={'text-primary'}>{item.temp.max}</span>
            </div>
        </div>
    );
};