"use client";

// IMPORTS - BUILTINS
import useCafeteriaplan from "hooks/useCafeteriaplan";
import { useEffect, useState, useRef, useMemo } from "react";
import { Navigation, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// IMPORTS - COMPONENTS
import Dish from "@/components/Cafeteriaplan/Dish";

// IMPORTS - ASSETS
import { useTranslation } from "next-i18next";
import indexStyles from "@/pages/index.module.scss";
import cafeteriaStyles from "@/components/Cafeteriaplan/Cafeteriaplan.module.scss";
import "swiper/css";
import "swiper/css/navigation";

// IMPORTS - CONTEXT
import { IdleHandler } from "utils/IdleHandling/IdleHandler";
import { useTimeoutContext } from "context/TimeoutContext";

// IMPORTS - HELPERS
import { getIndexForDate } from "utils/cafeteriahelper";
import { getWeekday } from "utils/dateHelpers";
import { useRouter } from "next/router";
import { Foodplan } from "./Foodplan";

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
  const timeoutContext = useTimeoutContext();
  const { data, isLoading, error } = useCafeteriaplan();
  const router = useRouter();

  const olRef = useRef<HTMLOListElement>(null);
  const timer = useRef<number>();

  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [currentIndex, setCurrentIndex] = useState<number | undefined>();
  const [swiperInstance, setSwiperInstance] = useState()

  useEffect(() => {
    if (typeof currentIndex !== "undefined" && data[currentIndex].date) setSelectedDate(data[currentIndex].date);
    else setSelectedDate(undefined)
  }, [currentIndex, data]);

  const index_of_today = useMemo(() => {
    if (typeof data !== "undefined") {
      const index = getIndexForDate(data, new Date());
      if (index !== -1) return index;
      else return 0;
    }
    else return 0
  }, [data])

    function resetLayout() {
      const current_time = new Date();

      var target_index = index_of_today;

      if (current_time.getHours() >= 15) {
        const next_index = getIndexForDate(
          data,
          new Date(current_time.getTime() + 86400000)
        );
        if (next_index !== -1) target_index = next_index;
      }

      //@ts-ignore
      if (swiperInstance) swiperInstance.slideTo(target_index);
    }

    useEffect(() => {
      const handler = new IdleHandler({
        origin: "cafeteriaplan",
        resetFunction: resetLayout
      });
      if (timeoutContext.manager) timeoutContext.manager.addResetListener(handler);
    }, [timeoutContext.manager]);

  useEffect(() => {
    const handler = new IdleHandler({
      origin: "cafeteriaplan",
      resetFunction: resetLayout
    });
    if (timeoutContext.manager) timeoutContext.manager.addResetListener(handler);
  }, [timeoutContext.manager]);

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
          <span className={cafeteriaStyles.dateText}>
            {selectedDate && getWeekday(selectedDate, "long", router.locale)}
          </span>
          <span className={cafeteriaStyles.dateNumber}>
            {selectedDate && selectedDate.toLocaleDateString("de-de")}
          </span>
        </div>
      </div>

      <Swiper
        modules={[Virtual, Navigation]}
        navigation={true}
        className={cafeteriaStyles.swiperContainer}
        slidesPerView={1}
        onActiveIndexChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
        initialSlide={index_of_today}
        loop={false}
        //@ts-ignore
        onSwiper={(swiper) => setSwiperInstance(swiper)}
      >
        {data.map((foodplan, index) => {
          return (
            <SwiperSlide key={index} virtualIndex={index}>
              {foodplan.item ? (
                <Foodplan data={foodplan.item} />
              ) : (
                <p className={cafeteriaStyles.missingDataString}>
                  {t("cafeteria_plan.no_data_for_day")}
                </p>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
