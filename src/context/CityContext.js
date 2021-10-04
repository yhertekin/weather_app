import { createContext, useContext, useState } from "react";

const CityContext = createContext();

export const CityProvider = ({ children }) => {
	const [city, setCity] = useState({
		city: "İSTANBUL",
		lat: 41.00527,
		lon: 28.97696,
	});
	const values = { city, setCity };
	return <CityContext.Provider value={values}>{children}</CityContext.Provider>;
};

export const useCity = () => useContext(CityContext);
