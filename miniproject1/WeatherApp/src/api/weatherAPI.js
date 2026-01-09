import axios from "axios";

const WEATHERAPI_KEY = import.meta.env.VITE_WEATHER_KEY;

export async function fetchWeatherData(q) {
  const res = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: "Kathmandu",
        units: "metric",
        appid: WEATHERAPI_KEY,
      },
    }
  );
  return res;
}
