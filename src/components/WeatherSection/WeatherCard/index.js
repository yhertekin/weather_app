import style from "./WeatherCard.module.css";

const WeatherCard = ({ data }) => {
	return (
		<div className={style.card}>
			<div className={style.day}>
				{new Date(data.dt * 1000).toLocaleString("eu-tr", {
					weekday: "short",
				})}
			</div>
			<img
				src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
				// src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
				alt="weather condition"
			/>
			<div className={style.description}>{data.weather[0].description}</div>
			<div className={style.temp}>
				<span>{data.temp.day.toFixed(1)}&deg;</span>
				<span className={style.nightTemp}>
					{data.temp.night.toFixed(1)}&deg;
				</span>
			</div>
		</div>
	);
};

export default WeatherCard;
