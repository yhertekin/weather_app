import CityInput from "./components/CityInput";
import WeatherSection from "./components/WeatherSection";
import { CityProvider } from "./context/CityContext";
import { WeatherProvider } from "./context/WeatherContext";

function App() {
	return (
		<CityProvider>
			<WeatherProvider>
				<CityInput />
				<WeatherSection />
			</WeatherProvider>
		</CityProvider>
	);
}

export default App;
