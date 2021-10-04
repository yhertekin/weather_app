import React from "react";

import { useWeather } from "../../context/WeatherContext";
import WeatherCard from "./WeatherCard";

import style from "./WeatherSection.module.css";

const WeatherSection = () => {
	const { weather } = useWeather();

	return (
		<div className={style.weather}>
			{weather &&
				weather.map((item, index) => <WeatherCard data={item} key={index} />)}
		</div>
	);
};

export default WeatherSection;
