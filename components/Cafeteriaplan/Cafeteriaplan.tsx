"use client";

// IMPORTS - BUILTINS
import useCafeteriaplan from "hooks/useCafeteriaplan";
import { useEffect, useState, useMemo } from "react";
import { Navigation, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

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

  const [selectedDate, setSelectedDate] = useState<Date>();
  const [currentIndex, setCurrentIndex] = useState<number>();
  const [swiperInstance, setSwiperInstance] = useState<typeof Swiper>();

  const index_of_today = useMemo(() => {
    if (typeof data !== "undefined") {
      const target_date = new Date();
      if (target_date.getHours() >= 15)
        target_date.setTime(target_date.getTime() + 86400000);
      const index = getIndexForDate(data, target_date);
      if (index !== -1) return index;
      else return 0;
    } else return 0;
  }, [data]);

  useEffect(() => {
    if (!data) return;
    if (typeof currentIndex !== "undefined" && data[currentIndex].date)
      setSelectedDate(data[currentIndex].date);
    else setSelectedDate(undefined);
  }, [currentIndex, data]);

  useEffect(() => {
    if (!data) return;
    setCurrentIndex(index_of_today);
  }, [data, index_of_today]);

  useEffect(() => {
    function resetLayout() {
      const current_time = new Date();

      if (!data) return;
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

    const handler = new IdleHandler({
      origin: "cafeteriaplan",
      resetFunction: resetLayout
    });
    if (timeoutContext.manager) timeoutContext.manager.addResetListener(handler);
  }, [timeoutContext.manager, data, index_of_today, swiperInstance]);

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
      {isLoading && <span>Data is loading...</span>}
      {error && <span>Some error occurred</span>}
      {data && (
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
      )}
    </section>
  );
}
