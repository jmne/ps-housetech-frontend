"use client";

// IMPORTS - BUILTINS
import useCafeteriaplan, { Cafeteria } from "hooks/useCafeteriaplan";
import { useEffect, useState, useMemo } from "react";
import Swiper, { Navigation, Virtual } from "swiper";
import { Swiper as SwiperElement, SwiperSlide } from "swiper/react";

// IMPORTS - ASSETS
import { useTranslation } from "next-i18next";
import cafeteriaStyles from "@/components/Cafeteriaplan/Cafeteriaplan.module.scss";

// IMPORTS - CONTEXT
import { IdleHandler } from "utils/IdleHandling/IdleHandler";
import { useTimeoutContext } from "context/TimeoutContext";

// IMPORTS - HELPERS
import { getIndexForDate } from "utils/cafeteriahelper";
import { getWeekday } from "utils/dateHelpers";
import { useRouter } from "next/router";
import { Foodplan } from "./Foodplan";

//
import * as Card from "@/components/Card";
import { CafeteriaSelector } from "./CafeteriaSelector";
import { Fallback } from "./Fallback";

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
  const [selectedCafeteria, setSelectedCafeteria] = useState<Cafeteria>("davinci");

  const { t } = useTranslation("index");
  const timeoutContext = useTimeoutContext();
  const router = useRouter();
  const { data, isLoading, error } = useCafeteriaplan(selectedCafeteria, router.locale);

  const [selectedDate, setSelectedDate] = useState<Date>();
  const [currentIndex, setCurrentIndex] = useState<number>();
  const [swiperInstance, setSwiperInstance] = useState<Swiper>();

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

    try {
      if (swiperInstance) swiperInstance.slideTo(index_of_today);
    } catch {
      console.log("Catched swiper exception");
    }
  }, [data, index_of_today, swiperInstance]);

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

      if (swiperInstance) swiperInstance.slideTo(target_index);
    }

    const handler = new IdleHandler({
      origin: "cafeteriaplan",
      resetFunction: resetLayout
    });
    if (timeoutContext.manager) timeoutContext.manager.addResetListener(handler);
  }, [timeoutContext.manager, data, index_of_today, swiperInstance]);

  return (
    <Card.Container
      className={[cafeteriaStyles.shadowFix].join(" ")}
      placement="smallMiddle"
    >
      <Card.Headline>
        <Card.Title>{t("cafeteria_plan.title")}</Card.Title>
        <Card.Middle className={cafeteriaStyles.select}>
          <CafeteriaSelector state={selectedCafeteria} setState={setSelectedCafeteria} />
        </Card.Middle>
        <Card.End className={cafeteriaStyles.date}>
          <span className={cafeteriaStyles.dateText}>
            {selectedDate && getWeekday(selectedDate, "long", router.locale)}
          </span>
          <span className={cafeteriaStyles.dateNumber}>
            {selectedDate && selectedDate.toLocaleDateString("de-de")}
          </span>
        </Card.End>
      </Card.Headline>
      <Card.Content>
        {isLoading && (
          <Fallback>
            Loading the foodplan for {t(`cafeteria_plan.cafeteria.${selectedCafeteria}`)}
          </Fallback>
        )}
        {error && (
          <Fallback>
            There was an error loading the foodplans for{" "}
            {t(`cafeteria_plan.cafeteria.${selectedCafeteria}`)}
          </Fallback>
        )}
        {data && (
          <SwiperElement
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
          </SwiperElement>
        )}
      </Card.Content>
    </Card.Container>
  );
}
