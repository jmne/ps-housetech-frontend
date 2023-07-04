import { useTimeoutContext } from "context/TimeoutContext";
import { useInstagram } from "hooks/useInstagram";
import { useState, useEffect } from "react";
import { Virtual, Navigation } from "swiper";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { IdleHandler } from "utils/IdleHandling/IdleHandler";

import styles from "./Instagram.module.scss";
import { Post } from "./Post";

export function Instagram() {
  const { data, isLoading, error } = useInstagram();
  const timeoutContext = useTimeoutContext();
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass>();
  console.log(error)

  useEffect(() => {
    function resetLayout() {
      if (swiperInstance) swiperInstance.slideTo(0);
    }

    const handler = new IdleHandler({
      origin: "instagram",
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
            <div className={styles.postContainer}>
              <div className={styles.stateDescription}>
                {isLoading && <span>Instagram posts are loading...</span>}
                {error && (
                  <span>Sorry, there was an error while loading the Instagram posts</span>
                )}
              </div>
            </div>
          </SwiperSlide>
        )}
        {!error &&
          data &&
          data.map((post, index) => {
            return (
              <SwiperSlide key={post.timestamp} virtualIndex={index}>
                <Post post={post} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}
