// IMPORTS - BUILTINS
import useCafeteriaplan from "hooks/useCafeteriaplan";
import { useEffect, useState, useRef, Fragment } from "react";
import Image from "next/image";

// IMPORTS - COMPONENTS
import Dish from "@/components/Cafeteriaplan/Dish";

// IMPORTS - ASSETS
import indexStyles from "@/pages/index.module.scss";
import cafeteriaStyles from "@/components/Cafeteriaplan/Cafeteriaplan.module.scss";
import { useTranslation } from "next-i18next";

// IMPORTS - ICONS
import arrow_back from "assets/images/arrow_back.svg";
import arrow_forward from "assets/images/arrow_forward.svg";
import { Foodplan, sample_foodplan } from "types/Foodplan";

// IMPORTS - CONTEXT
import { IdleHandler } from "utils/IdleHandling/IdleHandler";
import { useTimeoutContext } from "context/TimeoutContext";

// IMPORTS - HELPERS
import { getCafeteriaDateString } from "utils/cafeteriahelper";

export function getDayOfWeek(day: Date) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const dayOfWeekIndex = day.getDay();
  const dayOfWeek = daysOfWeek[dayOfWeekIndex];

  return dayOfWeek;
}

export default function Cafeteriaplan() {
  const { t } = useTranslation("index");
  const { data, isLoading, error } = useCafeteriaplan();

  const olRef = useRef<HTMLOListElement>(null);
  const timer = useRef<number>();

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const formattedDate = getCafeteriaDateString(selectedDate);
    const index = data.findIndex((e) => e.date === formattedDate);
    if (index !== -1) {
      setCurrentIndex(index);
    }
  }, [selectedDate, data]);

  const handleArrowBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
      setSelectedDate(new Date(data[currentIndex - 1].date));
    }
  };

  const handleArrowForward = () => {
    if (currentIndex < data.length - 1) {
      //   setCurrentIndex((prevIndex) => prevIndex + 1);
      setSelectedDate(new Date(data[currentIndex + 1].date));
    }
  };

  const timeoutContext = useTimeoutContext();

  const resetLayout = () => {
    if (olRef.current) {
      olRef.current.scrollBy({
        top: -olRef.current.scrollTop,
        behavior: "smooth"
      });
    }

    const currentDate = getCafeteriaDateString(selectedDate);
    const index = sample_foodplan.findIndex((dish) => dish.date === currentDate);

    if (index !== -1) {
      const currentTime = new Date().toLocaleTimeString("de-DE", {
        hour: "numeric",
        minute: "numeric",
        hour12: false
      });
      const currentHour = parseInt(currentTime.split(":")[0]);
      const currentMinute = parseInt(currentTime.split(":")[1]);

      if (currentHour >= 15 && currentMinute >= 0) {
        if (index < sample_foodplan.length - 1) {
          setCurrentIndex(index + 1);
        }
      } else {
        setCurrentIndex(index);
      }
    }
  };

  useEffect(() => {
    const handler = new IdleHandler({
      origin: "cafeteriaplan",
      resetFunction: resetLayout
    });
    if (timeoutContext.manager) timeoutContext.manager.addResetListener(handler);
  }, [timeoutContext.manager]);

  const currentData = data[currentIndex] || null;

  return (
    <section
      className={[
        indexStyles.smallContainer,
        indexStyles.contentSection,
        cafeteriaStyles.shadowFix
      ].join(" ")}
    >
      <div
        className={[indexStyles.cardHeadline, cafeteriaStyles.headlineMargin].join(" ")}
      >
        <h2>{t("cafeteria_plan.title")}</h2>
        <div className={cafeteriaStyles.date}>
          <Image
            src={arrow_back}
            alt={"Arrow Back"}
            fill={false}
            className={cafeteriaStyles.date}
            onClick={handleArrowBack}
          />
          <span className={cafeteriaStyles.dateText}>{getDayOfWeek(selectedDate)}</span>
          <Image
            src={arrow_forward}
            alt={"Arrow Forward"}
            fill={false}
            className={cafeteriaStyles.date}
            onClick={handleArrowForward}
          />
        </div>
      </div>
      <ol className={cafeteriaStyles.cafeteriaplan} ref={olRef}>
        {currentData &&
          currentData.item.map((dish, index) => (
            <Dish dish={dish} key={`${dish.meal}${dish.price1}${index}`} />
          ))}
      </ol>
    </section>
  );
}
