"use client"

import { useEffect, useState } from "react"
import styles from "./WeatherReport.module.scss"

import weatherIcon from "assets/images/sample_weather_image.png"
import { useRouter } from "next/router"

import chroma from "chroma-js"

const tempGradient = chroma.scale([
    "#3677FF",
    "#1BD4E4",
    "#FDCD39",
    "#F28D28",
    "#EC1111",
])
function getTemperatureColor(temperature: number) {
    let value = temperature / 30

    if (value > 1) value = 1
    if (value < 0) value = 0

    return (tempGradient(value).css())
}

interface forecastToday {
    time: number,
    temp: number
}

interface forecastDay {
    day: Date,
    temp: number
}

function getWeekday(day: Date, length: "short" | "long", locale: string) {
    const weekday = day
        .toLocaleTimeString(locale == "de" ? "de-de" : "en-gb", { weekday: length })
        .replace(".,", " ")
        .split(" ")[0]

    return (weekday)
}

export function WeatherReport() {
    const [currentTime, setCurrentTime] = useState(new Date())
    const router = useRouter()

    const currentMinutes =
        currentTime.getMinutes() < 10
            ? `0${currentTime.getMinutes()}`
            : currentTime.getMinutes()

    const sampleCurrentWeather = {
        "temp": 28,
        "rain": 2
    }

    const sampleForecastToday: forecastToday[] = [
        {
            "time": 12,
            "temp": 24,
        },
        {
            "time": 13,
            "temp": 20,
        },
        {
            "time": 14,
            "temp": 18,
        },
        {
            "time": 15,
            "temp": 16,
        },
        {
            "time": 16,
            "temp": 10,
        },
    ]

    const sampleForecastNextDays: forecastDay[] = [
        {
            "day": new Date(currentTime.getDate() + 86400000 * 1),
            "temp": 29
        },
        {
            "day": new Date(currentTime.getTime() + 86400000 * 2),
            "temp": 30
        },
        {
            "day": new Date(currentTime.getTime() + 86400000 * 3),
            "temp": 25
        },
    ]

    useEffect(() => {
        setInterval(() => {
            setCurrentTime(new Date())
        }, 5000)
    }, [currentTime])

    //<span>{currentTime.toLocaleTimeString()}</span>

    return (
        <div className={styles.container}>
            <h2>Weather Report</h2>

            <div className={styles.forecastToday}>
                {
                    sampleForecastToday.map((item) => {
                        return (
                            <div key={`${item.time}${item.temp}`}>
                                <span className={styles.muted}>{`${item.time}:00`}</span>
                                <span >{item.temp}°</span>
                                <img src={weatherIcon.src} alt={"weather icon"}/>
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles.forecastNextDays}>
                {
                    sampleForecastNextDays.map((item) => {
                        const weekday = getWeekday(item.day, "short", router.locale ? router.locale : "en-gb")

                        return (
                            <div key={`${item.day.getDay()}`}>
                                <span className={styles.muted}>{weekday}</span>
                                <span >{item.temp}°</span>
                                <img src={weatherIcon.src} alt={"weather icon"}/>
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles.currentWeather}>
                <div className={styles.information}>
                    <div className={styles.time}>
                        <span>{getWeekday(currentTime, "long", router.locale ? router.locale : "en-gb")}</span>
                        <span>{`${currentTime.getHours()}:${currentMinutes}`}</span>
                    </div>
                    <div className={styles.weather}>
                        <span style={{ color: getTemperatureColor(sampleCurrentWeather.temp) }}>{sampleCurrentWeather.temp}°</span>
                        <span className={styles.rainPrecipation}>{sampleCurrentWeather.rain}%</span>
                    </div>
                </div>
                <img src={weatherIcon.src} alt={"weather icon"}/>
            </div>
        </div>
    )
}