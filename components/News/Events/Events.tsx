import { Navigation, Virtual } from "swiper"
import { Swiper, SwiperSlide } from 'swiper/react';

import { useEvents } from "hooks/useEvents";
import { EventCard } from "./Event";
import styles from "./Events.module.scss"

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export function Events() {
    const { data } = useEvents()

    return (
        <>
            <Swiper modules={[Virtual, Navigation]} className={styles.swiperContainer} loop={true}>
                {
                    data.map((event, index) => {
                        return (
                            <SwiperSlide key={event.id} virtualIndex={index}>
                                <EventCard data={event} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper >

        </>
    )
}