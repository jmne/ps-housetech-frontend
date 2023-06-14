import { Event } from "types/Events"
import styles from "./Events.module.scss"

// Icon Imports
import IconClock from "assets/images/icon_clock.svg"
import IconLocation from "assets/images/icon_location.svg"
import IconEvent from "assets/images/event.svg"

interface props {
    data: Event
}

export function Event({ data }: props) {
    const date = new Date(data.start_date)
    const dateFormatted = date.toLocaleDateString("de-de")
    const time = date.toLocaleTimeString("de-de").slice(0, 5)

    return (
        <div className={styles.eventContainer}>
            <div className={styles.imageContainer}>
                {
                    data.image
                        ? <img src={data.image} alt="Event Image" />
                        : <div><IconEvent /></div>
                }
            </div>
            <div className={styles.description}>
                <h3>{data.title}</h3>
                { // If date is given -> Show date
                    data.start_date
                        ?
                        <div className={styles.item}>
                            <IconClock />
                            <div>
                                <span>{dateFormatted}</span>
                                <span className={styles.divider}> | </span>
                                <span>{time}</span>
                            </div>
                        </div>
                        :
                        <></>
                }
                { // If location is given -> Show location
                    data.location
                        ?
                        <div className={styles.item}>
                            <IconLocation />
                            <span>{data.location}</span>
                        </div>
                        :
                        <></>
                }
            </div>
        </div>
    )
}