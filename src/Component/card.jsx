import React from "react";
import { useWeather } from "../context/Weather";
const Card = () =>{
    const Weather=useWeather();
    return(
        <div className="Card">
            <img src= {Weather.Data?.current?.condition?.icon} />
            <h2>Temperature - <span className="red">{Weather.Data?.current?.temp_c}</span> &deg;C , Humidity - <span className="blue">{Weather.Data?.current?.humidity}</span></h2>
            <h5>{Weather.Data?.location?.name+","+Weather.Data?.location?.region+","+Weather.Data?.location?.country}</h5><h6>{Weather.Data?.location?.tz_id}</h6>
        </div>
    );
}

export default Card;