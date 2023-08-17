import { REQUEST_URL } from "utils/constants";
// IMPORT - BUILTINS
import useSWR from "swr";
import { fetcher } from "utils/basicFetcher";

// IMPORTS - ASSETS
import { WeatherData } from "types/Weather";

const url = `${REQUEST_URL}/api/weather`;
const options = { refreshInterval: 10 * 60 * 1000 };

/**
 *
 * @returns Current weather & Forecast
 */
export default function useWeather() {
  const { data, isLoading, error } = useSWR<WeatherData>(url, fetcher, options);

  return { data, isLoading, error };
}
