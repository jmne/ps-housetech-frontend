import { useOverlayContext } from "context/OverlayContext";
import { Event } from "types/Events";

import styles from "./EventOverlay.module.scss"
import indexStyles from "@/pages/index.module.scss"

import IconClock from "assets/images/icon_clock.svg"
import IconLocation from "assets/images/icon_location.svg"
import IconEvent from "assets/images/event.svg"
import IconClose from "assets/images/icon_close.svg"
import { useEffect, useRef } from "react";

interface props {
    event: Event
}

export function EventOverlay({ event }: props) {
    const overlayContext = useOverlayContext()
    const descriptionRef = useRef<HTMLParagraphElement>(null)

    const date = new Date(event.start_date)
    const dateFormatted = date.toLocaleDateString("de-de")
    const time = date.toLocaleTimeString("de-de").slice(0, 5)

    useEffect(() => {
        if (descriptionRef.current === null) return
        descriptionRef.current.innerHTML = event.description
    }, [descriptionRef, event.description])

    function handleClose(){
        overlayContext.setOverlay(undefined)
    }

    return (
        <article className={[indexStyles.overlayContainer, styles.container].join(" ")}>
            <div className={styles.imageContainer}>
                {
                    event.image
                        ? <img src={event.image} alt="Event Image" />
                        : <div><IconEvent /></div>
                }
            </div>
            <div className={styles.metaInformation}>
                { // If date is given -> Show date
                    event.start_date
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
                    event.location
                        ?
                        <div className={styles.item}>
                            <IconLocation />
                            <div>
                                <span>{event.location}</span>
                            </div>
                        </div>
                        :
                        <></>
                }
            </div>
            <div className={styles.description}>
                <h2>{event.title}</h2>
                <p ref={descriptionRef}></p>
            </div>
            <button className={indexStyles.close} onClick={handleClose}>
                <IconClose />
            </button>
        </article>
    )
}