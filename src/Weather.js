import React from "react";
import axios from "axios";
import { Audio } from 'react-loader-spinner';

export default function Weather(props){
    function handleResponse(response){
        alert(`The weather in ${response.data.name} is ${response.data.main.temp}`);
    }
    let apiKey="7fe0b3467e1501f365dd09ed8669437e";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return (
    <Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>
    )
}