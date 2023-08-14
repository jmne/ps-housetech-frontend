import { WeatherReport } from "./Report/WeaterReport";
import * as Card from "@/components/UI/Card";
import { useTranslation } from "next-i18next";
import { RainRadar } from "./RainRadar";
import styles from "./Weather.module.scss";

import Swiper, { Navigation } from "swiper";
import { Swiper as SwiperElement, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { IdleHandler } from "utils/IdleHandling/IdleHandler";
import { useTimeoutContext } from "context/TimeoutContext";

function Weather() {
  const { t } = useTranslation("index");
  const timeoutContext = useTimeoutContext();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<Swiper | undefined>();

  useEffect(() => {
    const resetLayout = () => {
      if (!swiperInstance) return;
      swiperInstance.slideTo(0);
    };

    const timeoutHandler = new IdleHandler({
      origin: "weather",
      resetFunction: resetLayout
    });

    if (timeoutContext.manager) timeoutContext.manager.addResetListener(timeoutHandler);

    return () => {
      if (timeoutContext.manager) timeoutContext.manager.removeResetListener("weather");
    };
  }, [swiperInstance, timeoutContext.manager]);

  return (
    <>
      <Card.Headline>
        <Card.Title>
          {currentIndex === 0 ? t("weather.title_report") : t("weather.title_radar")}
        </Card.Title>
      </Card.Headline>
      <SwiperElement
        modules={[Navigation]}
        navigation
        className={styles.body}
        slidesPerView={1}
        onActiveIndexChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
        initialSlide={0}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
      >
        <SwiperSlide>
          <WeatherReport />
        </SwiperSlide>
        <SwiperSlide>
          <RainRadar />
        </SwiperSlide>
      </SwiperElement>
    </>
  );
}

export default function WeatherWithBoundary() {
  return (
    <Card.Container placement="smallTop">
      <Weather />
    </Card.Container>
  );
}
