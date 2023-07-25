import { Event } from "types/Events";

import styles from "./EventOverlay.module.scss";
import indexStyles from "@/pages/index.module.scss";
import button_styles from "@/components/Button/Button.module.scss";

import IconClock from "assets/images/icon_clock.svg";
import IconLocation from "assets/images/icon_location.svg";
import IconEvent from "assets/images/event.svg";
import { useEffect, useRef } from "react";
import { Info } from "@/components/Info";

interface props {
  event: Event;
  setOverlayOpen: Function;
}

export function EventOverlay({ event, setOverlayOpen }: props) {
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  const date = new Date(event.start_date);
  const dateFormatted = date.toLocaleDateString("de-de");
  const time = date.toLocaleTimeString("de-de").slice(0, 5);

  useEffect(() => {
    if (descriptionRef.current === null) return;
    descriptionRef.current.innerHTML = event.description;
  }, [descriptionRef, event.description]);

  function handleClose() {
    setOverlayOpen(false);
  }

  return (
    <article className={[indexStyles.overlayContainer, styles.container].join(" ")}>
      <div className={styles.header}>
        <h2>{event.title}</h2>
        <div className={styles.imageContainer}>
          {event.image ? (
            <img src={event.image} alt="Event Image" />
          ) : (
            <div>
              <IconEvent />
            </div>
          )}
        </div>
        <div className={styles.metaInformation}>
          {
            // If date is given -> Show date
            event.start_date && (
              <Info>
                <IconClock />
                {dateFormatted} | {time}
              </Info>
            )
          }
          {
            // If location is given -> Show location
            event.location && (
              <Info>
                <IconLocation />
                {event.location}
              </Info>
            )
          }
        </div>
      </div>
      <div className={styles.description}>
        <p ref={descriptionRef}></p>
      </div>
      <div className={styles.closeDiv}>
        <button
          className={[styles.close, button_styles.base].join(" ")}
          onClick={handleClose}
        >
          Okay
        </button>
      </div>
    </article>
  );
}
