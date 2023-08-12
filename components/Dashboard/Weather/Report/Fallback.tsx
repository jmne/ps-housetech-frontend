import { getWeekday } from "utils/dateHelpers";
import styles from "./WeatherReport.module.scss";
import { useRouter } from "next/router";

import * as Card from "@/components/UI/Card";

interface props {
  currentTime: Date | undefined;
  currentMinutes: string | number | undefined;
  message: string;
}

export function FallbackWeatherReport({ currentTime, currentMinutes, message }: props) {
  const router = useRouter();
  return (
    <Card.Content className={styles.container}>
      <div className={styles.currentWeather}>
        <div className={[styles.information, styles.fallback].join(" ")}>
          <div className={styles.time}>
            <span>
              {currentTime
                ? getWeekday(currentTime, "long", router.locale ? router.locale : "en-gb")
                : "Someday"}
            </span>
            <span>
              {currentTime ? `${currentTime.getHours()}:${currentMinutes}` : "00:00"}
            </span>
          </div>
        </div>
      </div>
      <div className={[styles.forecastNextDays, styles.message].join(" ")}>{message}</div>
      <div className={styles.forecastToday}></div>
    </Card.Content>
  );
}
