import { useTranslation } from "next-i18next";

import { Navigation, Virtual } from "swiper"
import { Swiper, SwiperSlide } from 'swiper/react';

import { useEvents } from "hooks/useEvents";
import { Event } from "./Event";
import styles from "./Events.module.scss"

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export function Events() {
    const { t } = useTranslation("index")
    const { data, isLoading, error } = useEvents()

    return (
        <Swiper modules={[Virtual, Navigation]} className={styles.swiperContainer} loop={true}>
            {
                data.map((event, index) => {
                    return (
                        <SwiperSlide key={event.id} virtualIndex={index}>
                            <Event data={event} />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper >
    )
}