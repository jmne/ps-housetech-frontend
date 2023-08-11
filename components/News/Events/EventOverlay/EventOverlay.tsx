import { Event } from "types/Events";
import styles from "./EventOverlay.module.scss";
import IconClock from "assets/icons/clock.svg";
import IconLocation from "assets/icons/location.svg";
import IconEvent from "assets/icons/event.svg";
import { Info } from "@/components/Info";
import * as Overlay from "@/components/Overlay";
import { Description } from "./Description";

interface props {
  event: Event;
  setOpen: Function;
}

export function EventOverlay({ event, setOpen }: props) {
  const date = new Date(event.start_date);
  const dateFormatted = date.toLocaleDateString("de-de");
  const time = date.toLocaleTimeString("de-de").slice(0, 5);

  return (
    <Overlay.Container className={styles.container} setOpen={setOpen}>
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
      <Description text={event.description} />
    </Overlay.Container>
  );
}
