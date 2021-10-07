import axios from "axios";

const API_KEY = "294391145b225b18dd7e18175a9ec13a";

const SERVICE_URL = "https://api.openweathermap.org/data/2.5/onecall?";

export const getWeatherByLocation = async (lat, lon) => {
	const { data } = await axios.get(
		`${SERVICE_URL}lat=${lat}&lon=${lon}&exclude=minutely,hourly,current&units=metric&lang=tr&appid=${API_KEY}`
	);
	return data.daily;
};
