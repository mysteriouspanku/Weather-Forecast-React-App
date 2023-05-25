import React from "react";
import { useWeather } from "../context/Weather";
const Input =()=>{
    const Weather= useWeather();
    console.log(Weather);
    return(
        <input className="input-field" placeholder="....Type your City" value={Weather.SearchCity} onChange={(e)=>Weather.setSearchCity(e.target.value)} />
    );
}

export default Input;