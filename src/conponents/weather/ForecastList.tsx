import {ForecastItem} from "@/conponents/weather/ForecastItem";
import {Daily, ForeCastResponse} from "@/types/api/ForecastResponce";

interface Props {
    forecast: ForeCastResponse
}

export const ForecastList = ({forecast}: Props) => {

    return (
        <div className={'grid-cols-8'}>
            {
                forecast.daily.map((item: Daily, index: number) => {
                    return <ForecastItem item={item}/>
                })
            }
        </div>
    );
};