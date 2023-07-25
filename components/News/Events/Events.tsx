import { Navigation, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperClass } from "swiper/react";

import { useEvents } from "hooks/useEvents";
import { EventCard } from "./Event";
import styles from "./Events.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { memo, useEffect, useState } from "react";
import { useTimeoutContext } from "context/TimeoutContext";
import { IdleHandler } from "utils/IdleHandling/IdleHandler";

const Events = memo(() => {
  const { data, isLoading, error } = useEvents();
  const timeoutContext = useTimeoutContext();
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass>();

  useEffect(() => {
    function resetLayout() {
      try {
        if (swiperInstance) swiperInstance.slideTo(0);
      } catch {
        console.log("Swiper error catched");
      }
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
        navigation={true}
        className={styles.swiperContainer}
        loop={true}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
      >
        {(isLoading || error) && (
          <SwiperSlide>
            <div className={styles.eventContainer}>
              <div className={styles.stateDescription}>
                {isLoading && <span>Events are loading...</span>}
                {error && <span>Sorry, there was an error while loading the Events</span>}
              </div>
            </div>
          </SwiperSlide>
        )}
        {data &&
          data.map((event, index) => {
            return (
              <SwiperSlide key={event.id} virtualIndex={index}>
                <EventCard data={event} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
});

Events.displayName = "Events";
export default Events;
