import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <ul className="main-weather-characters">
      <li>
        <strong>Humidity: </strong>
        <span className="humidity">95</span> %
      </li>
      <li>
        <strong>Pressure: </strong>
        <span className="pressure">1007</span> hPa
      </li>
      <li>
        <strong>Wind: </strong>
        <span className="wind">5</span> km/h
      </li>
    </ul>
  );
}


// import React, { useState } from "react";
// import axios from 'axios';
// import Loader from "react-loader-spinner";

// export default function Weather() {
//   let [city, setCity] = useState("");
//   let [forecast, setForecast] = useState("");

//   function Weather(response) {
//     let icon = response.data.weather[0].icon;
//     setForecast(
//       <ul className="Forecast">
//         <li>Temperature: {Math.round(response.data.main.temp)} °C</li>
//         <li>Description: {response.data.weather[0].description}</li>
//         <li>Humidity: {response.data.main.humidity} %</li>
//         <li>Wind: {response.data.wind.speed} km/h</li>
//         <li>
//           {" "}
//           <img
//             src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
//             alt="weather icon"
//           />{" "}
//         </li>
//       </ul>
//     );
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     let units = "metric";
//     let apiKey = "f3b5dcfebc7cc9862a4e8b55ed966301";
//     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
//     axios.get(apiUrl).then(Weather);
//   }

//   function updateCity(event) {
//     setCity(event.target.value);
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Type a city..."
//           onChange={updateCity}
//           autoFocus={true}
//           autoComplete={false}
//         />
//         <input type="submit" value="Search" />
//       </form>
//       <div>{forecast}</div>
//     </div>
//   );
// }
// export default function Weather (props) {
//     function showTemperature (response) {
//     alert(`The temperature in ${response.data.name} is ${Math.round(response.data.main.temp)}° C.`);
//     }
//     let units = "metric";
//     let apiKey = "f3b5dcfebc7cc9862a4e8b55ed966301"
//     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
//     axios.get(apiUrl).then(showTemperature);
    
//     return (
//         <Loader type="Hearts" color="#ff75a0" height={120} width={120} timeout={3000} />
//     )
// }