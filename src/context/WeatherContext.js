import { createContext, useContext, useEffect, useState } from "react";
import { useCity } from "./CityContext";
import { getWeatherByLocation } from "../services/WeatherService";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
	const { city } = useCity();
	const [weather, setWeather] = useState();

	useEffect(() => {
		async function fetchData() {
			const response = await getWeatherByLocation(city.lat, city.lon);
			setWeather(response);
		}
		fetchData();
	}, [city]);

	const values = { weather, setWeather };
	return (
		<WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
	);
};

export const useWeather = () => useContext(WeatherContext);
