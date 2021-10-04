import { cities } from "../../data/cities";
import { useCity } from "../../context/CityContext";

import style from "./CityInput.module.css";

const CityInput = () => {
	const { city, setCity } = useCity();

	const handleChange = (event) => {
		const city_data = cities.find((item) => item.city === event.target.value);
		setCity(city_data);
	};

	return (
		<div className={style.inputArea}>
			<select
				type="select"
				name="city"
				onChange={handleChange}
				value={city.city}
				className={style.cityInput}
			>
				{cities.map((city, index) => (
					<option value={city.city} key={index}>
						{city.city}
					</option>
				))}
			</select>
		</div>
	);
};

export default CityInput;
