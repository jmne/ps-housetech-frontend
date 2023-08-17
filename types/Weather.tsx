export interface WeatherData {
  daily: ForecastDaily[];
  hourly: ForecastHourly[];
  current: SimplePrediction[];
}

interface ForecastDaily extends SimplePrediction {
  day: string;
  weekday: string;
  pop: number;
}

interface ForecastHourly extends SimplePrediction {
  time: string;
  pop: number;
}

interface SimplePrediction {
  temp: number;
  icon: string;
}
