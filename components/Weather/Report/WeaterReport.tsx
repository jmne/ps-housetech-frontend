"use client";

import { useEffect, useState } from "react";
import styles from "./WeatherReport.module.scss";

import { useRouter } from "next/router";

import chroma from "chroma-js";
import useWeather from "hooks/useWeather";

const tempGradient = chroma.scale([
  "#3677FF",
  "#1BD4E4",
  "#fcaa00",
  "#F27c28",
  "#EC1111"
]);

function getIconURL(icon: string, size: number) {
  return `https://openweathermap.org/img/wn/${icon}@${size}x.png`;
}

function getTemperatureColor(temperature: number) {
  let value = temperature / 30;

  if (value > 1) value = 1;
  if (value < 0) value = 0;

  return tempGradient(value).css();
}

function getWeekday(day: Date, length: "short" | "long", locale: string) {
  const weekday = day
    .toLocaleTimeString(locale == "de" ? "de-de" : "en-gb", { weekday: length })
    .replace(".,", " ")
    .split(" ")[0];

  return weekday;
}

export function WeatherReport() {
  const [currentTime, setCurrentTime] = useState<Date>();
  const [currentMinutes, setCurrentMinutes] = useState<number | string>();
  const { data, isLoading, error } = useWeather();
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

  if (isLoading || error || !data) {
    return <span>Loading... or error...</span>;
  }

  return (
    <div className={styles.container}>
      <h2>Weather Report</h2>

      <div className={styles.forecastToday}>
        {data.hourly.map((item, index) => {
          if (index >= 5) return;
          return (
            <div key={`${item.time}${item.temp.toFixed(0)}`}>
              <span className={styles.muted}>{`${parseInt(
                item.time.split(":")[0]
              )}`}</span>
              <span style={{ color: getTemperatureColor(item.temp) }}>
                {item.temp.toFixed(0)}°
              </span>
              <img
                src={getIconURL(item.icon, 2)}
                className={styles.iconSmall}
                alt={"weather icon"}
              />
            </div>
          );
        })}
      </div>
      <div className={styles.forecastNextDays}>
        {data.daily.map((item, index) => {
          if (index > 2) return;
          const weekday = getWeekday(
            new Date(item.day),
            "short",
            router.locale ? router.locale : "en-gb"
          );

          return (
            <div key={`${item.day}${item.temp}${item.icon}`}>
              <span className={styles.muted}>{weekday}</span>
              <span style={{ color: getTemperatureColor(item.temp) }}>
                {item.temp.toFixed(0)}°
              </span>
              {item.pop > 0.25 && (
                <span className={styles.precipitation}>{item.pop * 100}%</span>
              )}
              <img
                src={getIconURL(item.icon, 2)}
                className={styles.iconSmall}
                alt={"weather icon"}
              />
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
            <span style={{ color: getTemperatureColor(data.current[0].temp) }}>
              {data.current[0].temp.toFixed(0)}°
            </span>
          </div>
        </div>
        <img src={getIconURL(data.current[0].icon, 4)} alt={"weather icon"} />
      </div>
    </div>
  );
}
