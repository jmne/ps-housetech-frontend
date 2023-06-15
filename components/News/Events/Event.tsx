import { Event } from "types/Events"
import styles from "./Events.module.scss"

// Icon Imports
import IconClock from "assets/images/icon_clock.svg"
import IconLocation from "assets/images/icon_location.svg"
import IconEvent from "assets/images/event.svg"
import { useOverlayContext } from "context/OverlayContext"
import { EventOverlay } from "./EventOverlay/EventOverlay"

interface props {
    data: Event
}

export function EventCard({ data }: props) {
    const date = new Date(data.start_date)
    const dateFormatted = date.toLocaleDateString("de-de")
    const time = date.toLocaleTimeString("de-de").slice(0, 5)

    const overlayContext = useOverlayContext()

    function showOverlay(){
        overlayContext.setOverlay(<EventOverlay event={data} />)
    }

    return (
        <div className={styles.eventContainer} onClick={showOverlay}>
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
                            <div>
                                <span>{data.location}</span>
                            </div>
                        </div>
                        :
                        <></>
                }
            </div>
        </div>
    )
}