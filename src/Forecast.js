import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <ul className="main-information">
      <li>
        <span className="value-temperature"></span>
        <span className="units">
          0°
          <a href="#" className="celsius-link" class="active">
            C
          </a>
          |
          <a href="#" className="fahrenheit-link">
            F
          </a>
        </span>
        <i className="far fa-snowflake"></i>
      </li>
      <li className="weather-description">Light Snow</li>
    </ul>
  );
}
