import { Navigation, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperClass } from "swiper/react";

import { useEvents } from "hooks/useEvents";
import { EventCard } from "./Event";
import styles from "./Events.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { useTimeoutContext } from "context/TimeoutContext";
import { IdleHandler } from "utils/IdleHandling/IdleHandler";

export function Events() {
  const { data } = useEvents();
  const timeoutContext = useTimeoutContext();
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass>();

  useEffect(() => {
    function resetLayout() {
      if (swiperInstance) swiperInstance.slideTo(0);
    }

    const handler = new IdleHandler({
      origin: "events",
      resetFunction: resetLayout
    });

    if (timeoutContext.manager) timeoutContext.manager.addResetListener(handler);
  }, [timeoutContext.manager, swiperInstance]);

  return (
    <>
      <Swiper
        modules={[Virtual, Navigation]}
        className={styles.swiperContainer}
        loop={true}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
      >
        {data.map((event, index) => {
          return (
            <SwiperSlide key={event.id} virtualIndex={index}>
              <EventCard data={event} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
