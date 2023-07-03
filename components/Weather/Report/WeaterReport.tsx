"use client";

import { useEffect, useState } from "react";
import styles from "./WeatherReport.module.scss";

import weatherIcon from "assets/images/sample_weather_image.png";
import { useRouter } from "next/router";

import chroma from "chroma-js";

const tempGradient = chroma.scale([
  "#3677FF",
  "#1BD4E4",
  "#FDCD39",
  "#F28D28",
  "#EC1111"
]);
function getTemperatureColor(temperature: number) {
  let value = temperature / 30;

  if (value > 1) value = 1;
  if (value < 0) value = 0;

  return tempGradient(value).css();
}

interface forecastToday {
  time: number;
  temp: number;
}

interface forecastDay {
  day: Date;
  temp: number;
}

function getWeekday(day: Date, length: "short" | "long", locale: string) {
  const weekday = day
    .toLocaleTimeString(locale == "de" ? "de-de" : "en-gb", { weekday: length })
    .replace(".,", " ")
    .split(" ")[0];

  return weekday;
}

const INIT_TIME = new Date();

const sampleCurrentWeather = {
  temp: 28,
  rain: 2
};

const sampleForecastToday: forecastToday[] = [
  {
    time: 12,
    temp: 24
  },
  {
    time: 13,
    temp: 20
  },
  {
    time: 14,
    temp: 18
  },
  {
    time: 15,
    temp: 16
  },
  {
    time: 16,
    temp: 10
  }
];

const sampleForecastNextDays: forecastDay[] = [
  {
    day: new Date(INIT_TIME.getTime() + 86400000),
    temp: 29
  },
  {
    day: new Date(INIT_TIME.getTime() + 86400000 * 2),
    temp: 30
  },
  {
    day: new Date(INIT_TIME.getTime() + 86400000 * 3),
    temp: 25
  }
];

export function WeatherReport() {
  const [currentTime, setCurrentTime] = useState<Date>();
  const [currentMinutes, setCurrentMinutes] = useState<number | string>();
  const router = useRouter();

  useEffect(() => {
    const now = new Date();
    setCurrentTime(now);
    setCurrentMinutes(now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes());
  }, []);

  useEffect(() => {
    setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      setCurrentMinutes(
        now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes()
      );
    }, 5000);
  }, [currentTime]);

  //<span>{currentTime.toLocaleTimeString()}</span>

  return (
    <div className={styles.container}>
      <h2>Weather Report</h2>

      <div className={styles.forecastToday}>
        {sampleForecastToday.map((item) => {
          return (
            <div key={`${item.time}${item.temp}`}>
              <span className={styles.muted}>{`${item.time}:00`}</span>
              <span>{item.temp}°</span>
              <img src={weatherIcon.src} alt={"weather icon"} />
            </div>
          );
        })}
      </div>
      <div className={styles.forecastNextDays}>
        {sampleForecastNextDays.map((item) => {
          const weekday = getWeekday(
            item.day,
            "short",
            router.locale ? router.locale : "en-gb"
          );

          return (
            <div key={`${item.day.getDay()}`}>
              <span className={styles.muted}>{weekday}</span>
              <span>{item.temp}°</span>
              <img src={weatherIcon.src} alt={"weather icon"} />
            </div>
          );
        })}
      </div>
      <div className={styles.currentWeather}>
        <div className={styles.information}>
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
          <div className={styles.weather}>
            <span style={{ color: getTemperatureColor(sampleCurrentWeather.temp) }}>
              {sampleCurrentWeather.temp}°
            </span>
            <span className={styles.rainPrecipation}>{sampleCurrentWeather.rain}%</span>
          </div>
        </div>
        <img src={weatherIcon.src} alt={"weather icon"} />
      </div>
    </div>
  );
}
