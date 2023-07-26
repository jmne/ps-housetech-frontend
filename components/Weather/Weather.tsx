import { WeatherReport } from "./Report/WeaterReport";
import * as Card from "@/components/Card";
import { useTranslation } from "next-i18next";
import { RainRadar } from "./RainRadar";
import styles from "./Weather.module.scss";

import Swiper, { Navigation, Virtual } from "swiper";
import { Swiper as SwiperElement, SwiperSlide } from "swiper/react";
import { useState } from "react";

export function Weather() {
  const { t } = useTranslation("index");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<Swiper | undefined>();

  return (
    <Card.Container placement="smallTop">
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
    </Card.Container>
  );
}
